import Link from 'next/link'
import BaseLayout from '../components/common/BaseLayout'
import { PlaceInfo } from '../components/common/PlaceInfo'

const listPage = () => {
  const places = {
    totalPage: 4,
    currentPage: 1,
    nextUrl: '?page=2',
    results: [
      {
        location_code: '123',
        location_type: '음식점',
        name: '몬플몬플 숙대점',
        address: '서울특별시 용산구 청파동 청파로',
        latitude: 37.544127,
        longitude: 126.9667812,
        distance: '0.5km',
        isToiletExists: true,
        isChargerExists: true,
        isElevatorExists: false,
        isSlopeExists: false,
      },
      {
        location_code: '124',
        location_type: '음식점',
        name: '육쌈냉면 숙대점',
        address: '서울특별시 용산구 청파동 청파로',
        latitude: 37.544127,
        longitude: 126.9667812,
        distance: '0.5km',
        isToiletExists: true,
        isChargerExists: true,
        isElevatorExists: false,
        isSlopeExists: false,
      },
      {
        location_code: '125',
        location_type: '음식점',
        name: '코피티암 숙대점',
        address: '서울특별시 용산구 청파동 청파로',
        latitude: 37.544127,
        longitude: 126.9667812,
        distance: '0.5km',
        isToiletExists: true,
        isChargerExists: true,
        isElevatorExists: false,
        isSlopeExists: false,
      },
    ],
  }

  const renderPlaces =
    places &&
    places.results.map((place) => {
      return (
        <div key={place.location_code}>
          <PlaceInfo place={place} />
        </div>
      )
    })

  return (
    <BaseLayout>
      <Link href="/">
        <div>View Map</div>
      </Link>
      {renderPlaces}
    </BaseLayout>
  )
}

export default listPage
