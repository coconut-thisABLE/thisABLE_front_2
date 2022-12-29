import { useQuery } from '@tanstack/react-query'
import { apiClient } from './apiClient'
import { ReviewAverageCountType } from '../types'

// TODO: back error check
const fetchReviewAverageCount = async (
  locationId: number
): Promise<ReviewAverageCountType> => {
  const response = await apiClient.get(`/${locationId}/review/average`)
  if (response.status !== 200) {
    throw new Error('Unable to get review average count')
  }
  return response.data
}

const onError = () => {
  //TODO: handle error(401, 500)
  console.log('error')
}

export const useReviewAverageCountQuery = (locationId: number) => {
  return useQuery(
    ['reviewAverageCount', locationId],
    () => fetchReviewAverageCount(locationId),
    {
      initialData: {} as ReviewAverageCountType,
      enabled: !!locationId,
      onError,
    }
  )
}
