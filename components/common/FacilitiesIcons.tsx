import Image from 'next/image'
import styled from '@emotion/styled'
import { PlaceInfoType } from '../../types'

// 시설 정보 아이콘 뷰
const FacilitiesIcons = ({
  place,
  size,
  hasDescription,
}: {
  place: PlaceInfoType
  size: number
  hasDescription: boolean
}) => {
  const IconImage = ({
    src,
    description,
  }: {
    src: string
    description: string
  }) => (
    <IconWrapper hasDescription={hasDescription}>
      <Image src={src} width={size} height={size} />
      {hasDescription && <DescriptionText>{description}</DescriptionText>}
    </IconWrapper>
  )

  return (
    <IconsSection>
      {place.isToiletExists && (
        <IconImage src="/images/toilet.svg" description="장애인 화장실" />
      )}
      {place.isChargerExists && (
        <IconImage src="/images/charger.svg" description="휠체어 충전기" />
      )}
      {place.isElevatorExists && (
        <IconImage src="/images/elevator.svg" description="엘리베이터" />
      )}
      {place.isSlopeExists && (
        <IconImage src="/images/slope.svg" description="슬로프" />
      )}
    </IconsSection>
  )
}

const IconsSection = styled.section`
  display: flex;
  margin-top: 0.5rem;
  justify-content: flex-end;
`
const IconWrapper = styled.div<{ hasDescription: boolean }>`
  margin: 0 ${({ hasDescription }) => (hasDescription ? 0.4 : 0.1)}rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DescriptionText = styled.div`
  margin-top: 0.4rem;
  font-size: 0.7rem;
`

export default FacilitiesIcons
