import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import Text from '../common/Text'

import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import Rating from '@mui/material/Rating'

const ReviewInput = () => {
  const [userType, setUserType] = useState('anonymous')
  const [inputValue, setInputValue] = useState('')
  const [rate, setRate] = useState<number | null>(0)

  return (
    <ReviewInputContainer>
      <ReviewInputHeader>
        <Text size={1.1} bold>
          리뷰 작성하기
        </Text>
        <Rating
          value={rate}
          onChange={(_, newRate) => {
            setRate(newRate)
          }}
        />
      </ReviewInputHeader>
      <UserInfo>
        <FormControl>
          <RadioGroup
            row
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <FormControlLabel
              value="disabled"
              control={<Radio />}
              label="장애인"
            />
            <FormControlLabel
              value="able"
              control={<Radio />}
              label="비장애인"
            />
            <FormControlLabel
              value="anonymous"
              control={<Radio />}
              label="익명"
            />
          </RadioGroup>
        </FormControl>
      </UserInfo>
      <ReviewInputArea
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="리뷰는 익명으로 등록됩니다."
        value={inputValue}
      />
      <ReviewInputButton
        onClick={() => {
          // postReview(userType, locationId, inputValue, rating)
          setInputValue('')
          setRate(0)
        }}
      >
        등록
      </ReviewInputButton>
    </ReviewInputContainer>
  )
}

const ReviewInputContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
`
const ReviewInputHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
const ReviewInputArea = styled.textarea`
  border: 2px solid #9d9d9d;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 5rem;
  padding: 0.3rem;
  margin-top: 0.4rem;
  resize: none;
`
const ReviewInputButton = styled.button`
  display: flex;
  background-color: #e599b3;
  color: white;
  font-size: 0.9rem;
  margin-top: 0.6rem;
  padding: 0.4rem;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`

export default ReviewInput
