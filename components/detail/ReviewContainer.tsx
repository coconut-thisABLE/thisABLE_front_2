import styled from '@emotion/styled'
import { useState } from 'react'
import { reviewAverageCount } from '../../data'
import Text from '../common/Text'
import ReviewInput from './ReviewInput'
import ReviewList from './ReviewList'

// TODO: set location id
const ReviewContainer = () => {
  const [sort, setSort] = useState('recommended')

  return (
    <>
      <ReviewContainerHeader>
        <Text size={1.2} bold>
          {reviewAverageCount.count} 개의 리뷰
        </Text>
        <ReviewSortContainer>
          <SelectSort
            sort={sort}
            name={'recommended'}
            onClick={() => setSort('recommended')}
          >
            추천순
          </SelectSort>
          <SelectSort
            sort={sort}
            name={'createdAt'}
            onClick={() => setSort('createdAt')}
          >
            최신순
          </SelectSort>
        </ReviewSortContainer>
      </ReviewContainerHeader>
      <ReviewInput />
      <ReviewList />
    </>
  )
}

const ReviewContainerHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: row;
`
const SelectSort = styled.div<{ sort: string; name: string }>`
  font-weight: ${({ sort, name }) => (sort === name ? 'bold' : 'normal')};
  padding: 0 0.5rem;
  cursor: pointer;
`
const ReviewSortContainer = styled.div`
  display: flex;
  ${SelectSort}:first-of-type {
    border-right: 1px solid black;
  }
`

export default ReviewContainer
