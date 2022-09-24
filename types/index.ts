// 장소 리스트
export interface IPlaceInfo {
  _id: string
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

export interface IPlaceList {
  totalPage: number
  currentPage: number
  nextUrl: string
  results: IPlaceInfo[]
}
