import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import PlaceList from '../common/PlaceList'
import Detail from '../detail'
import Map from '../map'

const MapAndList = () => {
  const router = useRouter()
  const id = router.query?.id as string

  return (
    <Container>
      <Map />
      <RightWrapper>{id ? <Detail /> : <PlaceList />}</RightWrapper>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`
const RightWrapper = styled.div`
  width: 50rem;
  padding: 0 1rem;
`

export default MapAndList
