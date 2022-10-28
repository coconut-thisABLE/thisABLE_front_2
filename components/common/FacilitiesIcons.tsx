import Image from 'next/image'
import styled from '@emotion/styled'
import { PlaceInfoType } from '../../types'

// 시설 정보 아이콘 뷰
const FacilitiesIcons = ({ place }: { place: PlaceInfoType }) => {
  const IconImage = ({ src }: { src: string }) => (
    <IconWrapper>
      <Image src={src} width={30} height={30} />
    </IconWrapper>
  )

  return (
    <IconsSection>
      {place.isToiletExists && <IconImage src="/images/toilet.svg" />}
      {place.isChargerExists && <IconImage src="/images/charger.svg" />}
      {place.isElevatorExists && <IconImage src="/images/elevator.svg" />}
      {place.isSlopeExists && <IconImage src="/images/slope.svg" />}
    </IconsSection>
  )
}

const IconsSection = styled.section`
  display: flex;
  margin-top: 0.5rem;
  justify-content: flex-end;
`
const IconWrapper = styled.div`
  margin: 0 0.1rem;
`

export default FacilitiesIcons
