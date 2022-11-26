import styled from '@emotion/styled'
import PlaceInfo from './PlaceInfo'
import { PlaceInfoType } from '../../types'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Detail from '../detail'
import { usePlaceListQuery } from '../../api/usePlaceListQuery'

const PlaceList = () => {
  const router = useRouter()
  const [showDetail, setShowDetail] = useState<boolean>(false)
  const { data: placeListData } = usePlaceListQuery(1)
  const places = placeListData.results
  return showDetail ? (
    <Detail setShowDetail={setShowDetail} />
  ) : (
    <div>
      {places?.map((place: PlaceInfoType) => (
        <PlaceListContainer
          key={place._id}
          onClick={() =>
            router.pathname !== '/'
              ? router.push(`detail/${place._id}`)
              : setShowDetail(true)
          }
        >
          <PlaceInfo place={place} />
        </PlaceListContainer>
      ))}
    </div>
  )
}

const PlaceListContainer = styled.div`
  border: 2px solid #e599b3;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 1rem 1.2rem;
  padding: 0.6rem;
  min-width: 18rem;
`

export default PlaceList
