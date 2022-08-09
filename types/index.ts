// 장소 리스트
export interface IPlaceInfo {
  location_code: string
  location_type: string
  name: string
  address: string
  latitude: number
  longitude: number
  distance: string
  isToiletExists: boolean
  isChargerExists: boolean
  isElevatorExists: boolean
  isSlopeExists: boolean
}

export interface IPlaceList {
  totalPage: number
  currentPage: number
  nextUrl: string
  results: IPlaceInfo[]
}
