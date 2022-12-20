import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import PlaceList from '../common/PlaceList'
import Detail from '../detail'
import Map from '../map'

const MapAndList = () => {
  const router = useRouter()
  const id = router.query?.id as string

  return (
    <Container>
      <Map />
      {id ? <Detail /> : <PlaceList />}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

export default MapAndList
