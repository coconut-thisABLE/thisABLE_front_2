import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { PlaceListType } from '../types'

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: false,
})

//TODO: change fixed latitude and longitude
const fetchPlaces = async (pageNumber: number): Promise<PlaceListType> => {
  const response = await apiClient.get(
      `/?latitude=37.5441270&longitude=126.9667812&page=${pageNumber}`
  )
  if (response.status !== 200) {
    throw new Error('Unable to get place list')
  }
  return response.data
}

const onError = () => {
  //TODO: handle error(401, 500)
  console.log('error')
}

export const usePlaceListQuery = (pageNumber: number) => {
  return useQuery(['placesList', pageNumber], () => fetchPlaces(pageNumber), {
    initialData: {} as PlaceListType,
    enabled: !!pageNumber,
    onError,
  })
}
