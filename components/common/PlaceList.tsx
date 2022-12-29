import styled from '@emotion/styled'
import PlaceInfo from './PlaceInfo'
import { PlaceInfoType } from '../../types'
import { usePlaceListQuery } from '../../api/usePlaceListQuery'

const PlaceList = () => {
  const { data: placeListData } = usePlaceListQuery(1)
  const places = placeListData.results

  return (
    <div>
      {places?.map((place: PlaceInfoType) => (
        <PlaceListContainer key={place._id}>
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
  margin: 1rem 0;
  padding: 0.6rem;
  min-width: 18rem;
`

export default PlaceList
