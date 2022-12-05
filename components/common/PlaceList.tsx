import styled from '@emotion/styled'
import PlaceInfo from './PlaceInfo'
import { PlaceInfoType } from '../../types'
import { useRouter } from 'next/router'
import { Dispatch, SetStateAction } from 'react'
import Detail from '../detail'
import { usePlaceListQuery } from '../../api/usePlaceListQuery'

type PlaceListPropsType = {
  setIsDetailOpen?: Dispatch<SetStateAction<boolean>>
  isDetailOpen?: boolean
}

const PlaceList = ({ setIsDetailOpen, isDetailOpen }: PlaceListPropsType) => {
  const router = useRouter()
  const isHomePage = router.pathname === '/' && setIsDetailOpen
  const { data: placeListData } = usePlaceListQuery(1)
  const places = placeListData.results
  return isDetailOpen ? (
    <Detail setIsDetailOpen={setIsDetailOpen} />
  ) : (
    <div>
      {places?.map((place: PlaceInfoType) => (
        <PlaceListContainer
          key={place._id}
          onClick={() =>
            isHomePage
              ? setIsDetailOpen(true)
              : router.push(`detail/${place._id}`)
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
