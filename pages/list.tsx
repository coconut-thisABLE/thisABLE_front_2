import { NextPage } from 'next'
import Link from 'next/link'
import BaseLayout from '../components/common/BaseLayout'
import PlaceList from '../components/common/PlaceList'

const ListPage: NextPage = () => {
  return (
    <BaseLayout>
      <Link href="/">
        <div>View Map</div>
      </Link>
      <PlaceList />
    </BaseLayout>
  )
}

export default ListPage
