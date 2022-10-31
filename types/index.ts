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

// 리뷰 평균 및 개수
export interface ReviewAverageCountType {
  count: number
  average: number
}
