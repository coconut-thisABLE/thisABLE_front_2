import styled from '@emotion/styled'
import React, { useState, useEffect } from 'react'
import Text from '../common/Text'

const ReviewInput = () => {
  const [userType, setUserType] = useState('anonymous')
  const [inputValue, setInputValue] = useState('')

  return (
    <>
      <ReviewInputHeader>
        <Text size={1.2} bold>
          리뷰
        </Text>
        {/* <Rating onClick={handleRating} ratingValue={rating} /> */}
      </ReviewInputHeader>
      <UserInfo>
        <input
          type="radio"
          name="radio-group"
          value="disabled"
          onClick={() => setUserType('disabled')}
        />
        <label>장애인</label>
        <input
          type="radio"
          name="radio-group"
          value="abled"
          onClick={() => setUserType('abled')}
        />
        <label>비장애인</label>
        <input
          type="radio"
          name="radio-group"
          value="anonymous"
          defaultChecked
          onClick={() => setUserType('anonymous')}
        />
        <label>익명</label>
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
          // setRating(0)
        }}
      >
        등록
      </ReviewInputButton>
    </>
  )
}

export default ReviewInput

const ReviewInputHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 1rem;
`
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1.1rem;
`
const ReviewInputArea = styled.textarea`
  border: 2px solid #9d9d9d;
  border-radius: 10px;
  font-size: 0.8rem;
  min-height: 5rem;
  padding: 0.3rem;
  margin-top: 1rem;
  resize: none;
`
const ReviewInputButton = styled.button`
  display: flex;
  background-color: #e599b3;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 1rem;
  height: 1.3rem;
  padding: 12px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border-color: #e599b3;
`
// const  = styled.div``
// const  = styled.div``
// const  = styled.div``
// const  = styled.div``
// const  = styled.div``
// const  = styled.div``
// const  = styled.div``
