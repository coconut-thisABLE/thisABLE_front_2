import styled from '@emotion/styled'
import { Dispatch, SetStateAction } from 'react'
import { useRouter } from 'next/router'
import { placeDetail, reviewAverageCount } from '../../data'
import { PlaceInfoType } from '../../types'
import FacilitiesIcons from '../common/FacilitiesIcons'
import { NameTypeSection } from '../common/PlaceInfo'
import Text, { StyledText } from '../common/Text'
import ChargerInfoToggle from './ChargerInfoToggle'
import ReviewContainer from './ReviewContainer'

import Rating from '@mui/material/Rating'

type DetailPropsType = {
  setIsDetailOpen?: Dispatch<SetStateAction<boolean>>
}

const Detail = ({ setIsDetailOpen }: DetailPropsType) => {
  const place: PlaceInfoType = placeDetail.response
  // TODO: 동적 id와 실데이터 연결
  const router = useRouter()
  
  return (
    <DetailContainer>
      <button onClick={() => (setIsDetailOpen ? setIsDetailOpen(false) : router.push('/'))}>
        ◀ 뒤로 가기
      </button>
      {/* TODO: 모바일 환경에서는 /list (리스트로 가기) */}
      <DetailInfoSection>
        <NameTypeSection>
          <Text size={1.2} bold>
            {place.name}
          </Text>
          <Text color="#00B8E0" size={0.8}>
            {place.locationType}
          </Text>
        </NameTypeSection>
        <AddressText color="#b0b0b0" size={0.8}>
          {place.address}
        </AddressText>
        {reviewAverageCount && (
          <ReviewAverageCountSection>
            <Rating
              value={reviewAverageCount.average}
              precision={0.1}
              size="small"
              readOnly
            />
            <Text size={0.8}>({reviewAverageCount.average})</Text>
            <Text>
              리뷰 <b>{reviewAverageCount.count}</b>개
            </Text>
          </ReviewAverageCountSection>
        )}
        <FacilitiesIcons place={place} size={50} hasDescription />
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
