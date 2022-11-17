import Link from 'next/link'
import styled from '@emotion/styled'
import { PlaceInfoType } from '../../types'
import { conceptColors } from './BaseLayout'
import Text from './Text'
import FacilitiesIcons from './FacilitiesIcons'

const PlaceInfo = ({ place }: { place: PlaceInfoType }) => {
  return (
    <Link href={`detail/${place._id}`}>
      <PlaceInfoContainer>
        <DefaultInfoSection>
          <NameTypeSection>
            <Text size={1.1} bold>
              {place.name}
            </Text>
            <Text color="#00B8E0" size={0.8}>
              {place.locationType}
            </Text>
          </NameTypeSection>
          <Text color={conceptColors.mainOrange}>{place.distance}km</Text>
        </DefaultInfoSection>
        <Text color="#b0b0b0" size={0.8}>
          {place.address}
        </Text>
        <FacilitiesIcons place={place} size={30} />
      </PlaceInfoContainer>
    </Link>
  )
}

const PlaceInfoContainer = styled.div`
  margin: 0.2rem;
  div,
  p {
    margin-bottom: 0.2rem;
  }
`
const DefaultInfoSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const NameTypeSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  p:first-of-type {
    margin-right: 0.4rem;
  }
`

export { NameTypeSection }

export default PlaceInfo
