import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { PlaceDetailType } from '../types'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: false,
})

const fetchPlaceDetail = async (
  locationId: number
): Promise<PlaceDetailType> => {
  const response = await apiClient.get(`/${locationId}`)
  if (response.status !== 200) {
    throw new Error('Unable to get place detail')
  }
  return response.data
}

const onError = () => {
  //TODO: handle error(401, 500)
  console.log('error')
}

export const usePlaceDetailQuery = (locationId: number) => {
  return useQuery(
    ['placeDetail', locationId],
    () => fetchPlaceDetail(locationId),
    {
      initialData: {} as PlaceDetailType,
      enabled: !!locationId,
      onError,
    }
  )
}
