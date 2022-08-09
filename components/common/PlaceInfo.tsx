import toiletImg from '../../public/images/toilet.svg'
import chargerImg from '../../public/images/charger.svg'
import slopeImg from '../../public/images/slope.svg'
import elevatorImg from '../../public/images/elevator.svg'
import { IPlaceInfo } from '../../types'

export const PlaceInfo = ({ place }: { place: IPlaceInfo }) => {
  return (
    <div>
      <div>
        <div>
          <h5>{place.name}</h5>
          <div>{place.location_type}</div>
        </div>
        <div>{place.distance}</div>
      </div>
      <div>{place.address}</div>
      <div>
        {place.isToiletExists && <img src={toiletImg.src}></img>}
        {place.isChargerExists && <img src={chargerImg.src}></img>}
        {place.isElevatorExists && <img src={elevatorImg.src}></img>}
        {place.isSlopeExists && <img src={slopeImg.src}></img>}
      </div>
    </div>
  )
}
