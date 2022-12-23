// 장소 리스트
export interface PlaceInfoType {
  _id: number
  locationType: string
  name: string
  address: string
  latitude: number
  longitude: number
  distance: number
  isToiletExists: boolean
  isChargerExists: boolean
  isElevatorExists: boolean
  isSlopeExists: boolean
  googlePlaceId: string
}

export interface PlaceListType {
  totalPage: number
  currentPage: number
  nextUrl: string
  results: PlaceInfoType[]
}

// 장소 디테일
export interface PlaceDetailType {
  message: string
  response: PlaceInfoType
}

// 충전기 디테일
export interface chargerDataType {
  locationId: number
  airinjectoryn: string
  moblphonchrstnyn: string
  smtmuseco: string
  weekdayoperopenhhmm: string
  weekdayopercolsehhmm: string
  satoperoperopenhhmm: string
  satoperclosehhmm: string
  holidayoperopenhhmm: string
  holidaycloseopenhhmm: string
  fcltynm: string
  institutionnm: string
  institutionphonenumber: string
  instllcdesc: string
  work_dttm: string
  referencedate: string
}

export interface chargerDetailType {
  message: string
  data: chargerDataType
}

// 리뷰 평균 및 개수
export interface ReviewAverageCountType {
  count: number
  average: number
}

// 리뷰 리스트
export interface ReviewDataType {
  _id: string
  locationId: number
  userId: string | null
  userType: string
  good: number
  bad: number
  detail: string
  star: number
  createdAt: string
}

export interface ReviewListType {
  message: string
  data: ReviewDataType[]
}
