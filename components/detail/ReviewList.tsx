import styled from '@emotion/styled'
import Image from 'next/image'
import { reviews } from '../../data'
import Text, { StyledText } from '../common/Text'

import Rating from '@mui/material/Rating'

const ReviewList = () => {
  return (
    <ReviewListContainer>
      {reviews?.data?.map((review) => (
        <ReviewContainer key={review._id}>
          <ReviewInfoWrapper>
            <ReviewStarUserTypeWrapper>
              <Rating
                value={review.star}
                precision={0.5}
                size="small"
                readOnly
              />
              <Text color="#f0a044" size={0.9}>
                {review.userType}
              </Text>
            </ReviewStarUserTypeWrapper>
            <Text color="#9d9d9d" size={0.7}>
              {review.createdAt.substring(0, 10)}
            </Text>
          </ReviewInfoWrapper>
          <ReviewText>{review.detail}</ReviewText>
          <HelpButtonWrapper>
            <HelpButton
            // onClick={() => {
            //   postReviewRecommend(review._id)
            // }}
            >
              <Image
                src={'/images/thumbs_up.svg'}
                width={15}
                height={15}
              ></Image>
              <ButtonDescriptionText>도움이 돼요</ButtonDescriptionText>
              <Text color="#cb3267" size={1} bold>
                {review.good}
              </Text>
            </HelpButton>
            <HelpButton
            // onClick={() => postReviewDiscourage(review._id)}
            >
              <Image
                src={'/images/thumbs_down.svg'}
                width={15}
                height={15}
              ></Image>
              <ButtonDescriptionText>도움이 안 돼요</ButtonDescriptionText>
              <Text color="#cb3267" size={1} bold>
                {review.bad}
              </Text>
            </HelpButton>
          </HelpButtonWrapper>
        </ReviewContainer>
      ))}
    </ReviewListContainer>
  )
}

const ReviewListContainer = styled.section``
const ReviewContainer = styled.div`
  margin-top: 1rem;
  padding-bottom: 1rem;
  border-bottom: #9d9d9d;
  border-bottom-width: 0.08rem;
  border-bottom-style: solid;
`
const ReviewInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ReviewStarUserTypeWrapper = styled.div`
  display: flex;
  align-items: center;
  ${StyledText} {
    margin-left: 0.4rem;
  }
`
const ReviewText = styled.p`
  font-size: 1rem;
  align-items: center;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
`
const HelpButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`
const HelpButton = styled.button`
  display: flex;
  font-weight: bold;
  font-size: 0.8rem;
  height: 1.7rem;
  align-items: center;
  border: 1px solid #f0a044;
  border-radius: 10px;
  background-color: #ffffff;
  padding-left: 1rem;
  padding-right: 1rem;
`
const ButtonDescriptionText = styled.p`
  margin: 0 0.5rem 0 0.2rem;
`

export default ReviewList
