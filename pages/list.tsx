import { NextPage } from 'next'
import Link from 'next/link'
import { places } from '../data'
import BaseLayout from '../components/common/BaseLayout'
import PlaceInfo from '../components/common/PlaceInfo'
import styled from '@emotion/styled'

const ListPage: NextPage = () => {
  return (
    <BaseLayout>
      <Link href="/">
        <div>View Map</div>
      </Link>
      {places?.results?.map((place) => (
        <PlaceListContainer>
          <PlaceInfo place={place} key={place._id} />
        </PlaceListContainer>
      ))}
    </BaseLayout>
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

export default ListPage
