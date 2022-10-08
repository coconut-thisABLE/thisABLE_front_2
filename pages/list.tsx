import { NextPage } from 'next'
import Link from 'next/link'
import { places } from '../data'
import BaseLayout from '../components/common/BaseLayout'
import { PlaceInfo } from '../components/common/PlaceInfo'

const ListPage: NextPage = () => {
  const renderPlaces =
    places &&
    places.results.map((place) => {
      return (
        <div key={place._id}>
          <PlaceInfo place={place} />
        </div>
      )
    })

  return (
    <BaseLayout>
      <Link href="/">
        <div>View Map</div>
      </Link>
      {renderPlaces}
    </BaseLayout>
  )
}

export default ListPage
