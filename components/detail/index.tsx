import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { PlaceInfoType } from '../../types'
import FacilitiesIcons from '../common/FacilitiesIcons'
import { NameTypeSection } from '../common/PlaceInfo'
import Text, { StyledText } from '../common/Text'
import ChargerInfoToggle from './ChargerInfoToggle'
import ReviewContainer from './ReviewContainer'
import { usePlaceDetailQuery } from '../../api/usePlaceDetailQuery'
import { useReviewAverageCountQuery } from '../../api/useReviewAverageCountQuery'

import Rating from '@mui/material/Rating'

const Detail = () => {
  const router = useRouter()
  const id = router.query?.id as string
  const { data: placeDetail } = usePlaceDetailQuery(+id)
  const place: PlaceInfoType = placeDetail?.response
  const { data: reviewAverageCount } = useReviewAverageCountQuery(+id)

  return (
    <DetailContainer>
      {/* TODO: 모바일 환경에서는 /list (리스트로 가기) */}
      <button onClick={() => router.push('/')}>◀ 뒤로 가기</button>
      <DetailInfoSection>
        <NameTypeSection>
          <Text size={1.2} bold>
            {place?.name ?? '장소이름'}
          </Text>
          <Text color="#00B8E0" size={0.8}>
            {place?.locationType ?? '지하철'}
          </Text>
        </NameTypeSection>
        <AddressText color="#b0b0b0" size={0.8}>
          {place?.address}
        </AddressText>
        {reviewAverageCount && (
          <ReviewAverageCountSection>
            <Rating
              value={reviewAverageCount.average}
              precision={0.1}
              size="small"
              readOnly
            />
            <Text size={0.8}>({reviewAverageCount?.average})</Text>
            <Text>
              (리뷰 <b>{reviewAverageCount?.count ?? 0}</b>
              개)
            </Text>
          </ReviewAverageCountSection>
        )}
        {place && <FacilitiesIcons place={place} size={50} hasDescription />}
      </DetailInfoSection>
      <ChargerInfoToggle />
      <ReviewContainer />
    </DetailContainer>
  )
}

const DetailContainer = styled.article`
  margin-top: 0.4rem;
`
const DetailInfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.4rem 0;
`
const AddressText = styled(StyledText)`
  margin-top: 0.4rem;
`
const ReviewAverageCountSection = styled.section`
  display: flex;
  margin: 1rem 0;
  align-items: center;
  ${StyledText}:last-of-type {
    margin-left: 0.6rem;
  }
`

export default Detail
