import Link from 'next/link'
import styled from '@emotion/styled'
import { placeDetail } from '../../data'
import { PlaceInfoType } from '../../types'
import FacilitiesIcons from '../common/FacilitiesIcons'
import { NameTypeSection } from '../common/PlaceInfo'
import Text from '../common/Text'

const Detail = () => {
  const place: PlaceInfoType = placeDetail.response

  return (
    <section>
      <Link href={`/`}>◀ 뒤로 가기</Link>
      {/* TODO: 모바일 환경에서는 /list (리스트로 가기) */}
      <DetailInfoSection>
        <NameTypeSection>
          <Text size={1.1} bold>
            {place.name}
          </Text>
          <Text color="#00B8E0" size={0.8}>
            {place.locationType}
          </Text>
        </NameTypeSection>
        <Text color="#b0b0b0" size={0.8}>
          {place.address}
        </Text>
        <FacilitiesIcons place={place} size={50} hasDescription />
      </DetailInfoSection>
    </section>
  )
}

const DetailInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  > div:nth-of-type(2) {
    margin-top: 1rem;
  }
`

export default Detail
