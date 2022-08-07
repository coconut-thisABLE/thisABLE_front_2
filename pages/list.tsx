import BaseLayout from '../components/common/BaseLayout'
import Link from 'next/link'
import slopeImg from '../public/images/slope.svg'
import chargerImg from '../public/images/charger.svg'
import toiletImg from '../public/images/toilet.svg'
import elevatorImg from '../public/images/elevator.svg'

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
        location_code: '123',
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
        location_code: '123',
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
          <div>
            <div>
              <h5>{place.name}</h5>
              <div>{place.location_type}</div>
            </div>
            <div>{place.distance}</div>
          </div>
          <div>{place.address}</div>
          <div>
            {place.isToiletExists && <img src={toiletImg}></img>}
            {place.isChargerExists && <img src={chargerImg}></img>}
            {place.isElevatorExists && <img src={elevatorImg}></img>}
            {place.isSlopeExists && <img src={slopeImg}></img>}
          </div>
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
