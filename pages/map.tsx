import { NextPage } from 'next'
import BaseLayout from '../components/common/BaseLayout'
import Map from '../components/map'

const MapPage: NextPage = () => {
  return (
    <BaseLayout>
      <Map />
    </BaseLayout>
  )
}

export default MapPage
