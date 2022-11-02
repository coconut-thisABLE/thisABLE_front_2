import styled from '@emotion/styled'
import { chargerDetail } from '../../data'
import ToggleView from '../common/ToggleView'

const ChargerInfoToggle = () => {
  const charger = chargerDetail.data

  type ChargerInfoType = {
    title: string
    data: string
  }

  const ChargerInfoList: ChargerInfoType[] = [
    {
      title: '설치 장소',
      data: charger.instllcdesc,
    },
    {
      title: '공기 주입 가능',
      data: charger.airinjectoryn,
    },
    {
      title: '휴대전화 충전',
      data: charger.moblphonchrstnyn,
    },
    { title: '동시 사용 가능 대수', data: charger.smtmuseco },
    {
      title: '평일 운영 시간',
      data: `${charger.weekdayoperopenhhmm} ~ ${charger.weekdayopercolsehhmm}`,
    },
    {
      title: '토요일 운영 시간',
      data: `${charger.satoperoperopenhhmm} ~ ${charger.satoperclosehhmm}`,
    },
    {
      title: '공휴일 운영 시간',
      data: `${charger.holidayoperopenhhmm} ~ ${charger.holidaycloseopenhhmm}`,
    },
    { title: '시설명', data: charger.fcltynm },
    { title: '관리기관명', data: charger.institutionnm },
    { title: '관리기관 번호', data: charger.institutionphonenumber },
    { title: '데이터 기준 일자', data: charger.referencedate },
  ]

  return (
    <ChargerInfoToggleSection>
      <ToggleView title="휠체어 충전기 세부 정보 보기">
        {ChargerInfoList.map((chargerInfo: ChargerInfoType) => (
          <>
            <div>{chargerInfo.title}</div>
            <div>{chargerInfo.data}</div>
          </>
        ))}
      </ToggleView>
    </ChargerInfoToggleSection>
  )
}

const ChargerInfoToggleSection = styled.section`
  display: flex;
  justify-content: center;
`

export default ChargerInfoToggle
