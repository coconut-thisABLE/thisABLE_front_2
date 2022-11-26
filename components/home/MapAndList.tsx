import styled from "@emotion/styled"
import { useState } from "react"
import PlaceList from "../common/PlaceList"
import Detail from "../detail"
import Map from "../map"

const MapAndList = () => {
  const [clickedLocation, setClickedLocation] = useState<string>('')
  const [showDetail, setShowDetail] = useState<boolean>(false)
  
  return (
    <Container>
      <Map width={70} setChosenLocation={setClickedLocation} />
      {clickedLocation || showDetail ? (
        <Detail setShowDetail={setShowDetail} />
      ) : (
        <PlaceList />
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
`

export default MapAndList
