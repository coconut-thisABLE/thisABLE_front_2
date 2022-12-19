import type { NextPage } from 'next'
import BaseLayout from '../components/common/BaseLayout'
import MapAndList from '../components/home/MapAndList'

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <MapAndList />
    </BaseLayout>
  )
}

export default Home
