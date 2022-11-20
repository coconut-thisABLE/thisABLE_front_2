// 장소 리스트
export const places = {
  totalPage: 4,
  currentPage: 1,
  nextUrl: '?page=2',
  results: [
    {
      _id: 123,
      locationType: '음식점',
      name: '몬플몬플 숙대점',
      address: '서울특별시 용산구 청파동 청파로',
      latitude: 37.544127,
      longitude: 126.9667812,
      distance: 0.5,
      isToiletExists: true,
      isChargerExists: true,
      isElevatorExists: false,
      isSlopeExists: false,
      googlePlaceId: 'ChIJN2x0fu2ifDUR51BupseGYmE',
    },
    {
      _id: 124,
      locationType: '음식점',
      name: '육쌈냉면 숙대점',
      address: '서울특별시 용산구 청파동 청파로',
      latitude: 37.544127,
      longitude: 126.9667812,
      distance: 0.5,
      isToiletExists: true,
      isChargerExists: true,
      isElevatorExists: true,
      isSlopeExists: true,
      googlePlaceId: 'ChIJN2x0fu2ifDUR51BupseGYmE',
    },
    {
      _id: 125,
      locationType: '음식점',
      name: '코피티암 숙대점',
      address: '서울특별시 용산구 청파동 청파로',
      latitude: 37.544127,
      longitude: 126.9667812,
      distance: 0.5,
      isToiletExists: true,
      isChargerExists: true,
      isElevatorExists: false,
      isSlopeExists: false,
      googlePlaceId: 'ChIJN2x0fu2ifDUR51BupseGYmE',
    },
  ],
}

// 장소 디테일
export const placeDetail = {
  message: 'Retrieve Location By Id Success',
  response: {
    _id: 1,
    locationType: 'subway',
    name: '국립중앙박물관',
    address: '137 Seobinggo-ro',
    latitude: 37.5238506,
    longitude: 126.9804702,
    distance: 1.5,
    isToiletExists: true,
    isChargerExists: true,
    isElevatorExists: true,
    isSlopeExists: true,
    googlePlaceId: 'ChIJN2x0fu2ifDUR51BupseGYmE',
  },
}

// 충전기 디테일
export const chargerDetail = {
  message: 'get charger info success',
  data: {
    locationId: 12,
    airinjectoryn: 'Y',
    moblphonchrstnyn: 'Y',
    smtmuseco: '2',
    weekdayoperopenhhmm: '09:00',
    weekdayopercolsehhmm: '18:00',
    satoperoperopenhhmm: '00:00',
    satoperclosehhmm: '00:00',
    holidayoperopenhhmm: '00:00',
    holidaycloseopenhhmm: '00:00',
    fcltynm: '용산행복장애인자립생활센터',
    institutionnm: '용산행복장애인자립생활센터',
    institutionphonenumber: '02-704-0420',
    instllcdesc: '센터 1층',
    work_dttm: '1646631453000',
    referencedate: '2021-09-15',
  },
}

// 리뷰 평균 및 개수
export const reviewAverageCount = {
  count: 5,
  average: 4.5,
}
