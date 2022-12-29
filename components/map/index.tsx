import { CircularProgress } from '@mui/material'
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from '@react-google-maps/api'
import { useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { usePlaceListQuery } from '../../api/usePlaceListQuery'
import PlaceInfo from '../common/PlaceInfo'

export type CategoryType = {
  title: string
  image?: string
}

export const CategoryList: CategoryType[] = [
  {
    title: '장애인 화장실',
    image: '/images/toilet.svg',
  },
  {
    title: '휠체어 충전기',
    image: '/images/charger.svg',
  },
  {
    title: '엘리베이터',
    image: '/images/elevator.svg',
  },
  { title: '슬로프', image: '/images/slope.svg' },
  { title: '모두 보기' },
]

const Map = () => {
  const initialLat = 37.544127
  const initialLng = 126.9667812
  const [lat, setLat] = useState<number>(initialLat)
  const [lng, setLng] = useState<number>(initialLng)
  const [activeMarker, setActiveMarker] = useState<number | null>(null)
  const [category, setCategory] = useState<string>('')
  const router = useRouter()
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API as string,
  })
  const handleCategoryClick = (category: string) => {
    category === '모두 보기' ? router.push('/list') : setCategory(category)
  }
  const { data: placeListData } = usePlaceListQuery(1)
  const places = placeListData.results

  const selectMarker = (locationType: string) => {
    return {
      restaurant: 'images/restaurant.svg',
      accommodation: 'images/hotel.svg',
      shoppingmall: 'images/mall.svg',
      subway: 'images/subway.svg',
      administrative: 'images/business.svg',
      cultural: 'images/culture.svg',
    }[locationType]
  }

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) return
    setActiveMarker(marker)
  }

  //TODO: fix onClick  - use placeId
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: '94vh', width: '100%' }}
      zoom={18}
      center={{ lat: +lat, lng: +lng }}
      onClick={() => setActiveMarker(null)}
    >
      <FilterContainer>
        {CategoryList.map((category: CategoryType) => (
          <FilterButton
            key={category.title}
            onClick={() => handleCategoryClick(category.title)}
          >
            {category.image && (
              <Image src={category.image as string} width={20} height={20} />
            )}
            <FilterText>{category.title}</FilterText>
          </FilterButton>
        ))}
      </FilterContainer>
      {places?.map((place) => (
        <Marker
          key={place._id}
          position={{ lat: place.latitude, lng: place.longitude }}
          onClick={() => handleActiveMarker(place._id)}
          icon={selectMarker(place.locationType)}
        >
          {activeMarker === place._id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <PlaceInfo place={place} />
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
      <Marker position={{ lat: +lat, lng: +lng }} icon="images/myself.svg" />;
    </GoogleMap>
  ) : (
    <CircularProgress />
  )
}

const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  height: 2rem;
  gap: 0.25rem;
  margin: 1rem 0;
  justify-content: center;
`
const FilterButton = styled.button`
  position: relative;
  display: flex;
  gap: 0.2rem;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: white;
  font-weight: bold;
  border-radius: 20px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.3);
  word-break: break-word;
`
const FilterText = styled.p`
  font-size: 0.25rem;
`

export default Map
