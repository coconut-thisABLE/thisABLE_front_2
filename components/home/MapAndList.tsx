import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import PlaceList from '../common/PlaceList'
import Detail from '../detail'
import Map from '../map'

const MapAndList = () => {
  const [clickedLocation, setClickedLocation] = useState<string>('')
  const [isDetailOpen, setIsDetailOpen] = useState<boolean>(false)

  useEffect(()=>{
    setIsDetailOpen(!!clickedLocation)
  },[clickedLocation])
  return (
    <Container>
      <Map setChosenLocation={setClickedLocation} />
      {isDetailOpen ? (
        <Detail setIsDetailOpen={setIsDetailOpen} />
      ) : (
        <PlaceList
          isDetailOpen={isDetailOpen}
          setIsDetailOpen={setIsDetailOpen}
        />
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

export default MapAndList
