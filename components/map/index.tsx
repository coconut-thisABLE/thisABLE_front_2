import { CircularProgress } from '@mui/material'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api'
import { useState } from 'react'
import Image from 'next/image'
import styled from '@emotion/styled'
import { useRouter } from 'next/router'

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
  const [category, setCategory] = useState<string>('')
  const router = useRouter()
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API as string,
  })
  const handleCategoryClick = (category: string) => {
    category === '모두 보기' ? router.push('/list') : setCategory(category)
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={{ height: '94vh', width: '100%' }}
      zoom={18}
      center={{ lat: +lat, lng: +lng }}
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
      {/* {renderMarker} */}
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
