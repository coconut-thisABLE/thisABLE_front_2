import { NextPage } from 'next'
import BaseLayout from '../components/common/BaseLayout'
import Map from '../components/map'

const mapPage:NextPage = () => {
  return (
    <BaseLayout>
      <Map />
    </BaseLayout>
  )
}

export default mapPage
