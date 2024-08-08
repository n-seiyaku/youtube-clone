import HomepageWrapper from './ui/homepage/homepage'
import { ItemsSkeleton } from './ui/skeletons'
import { Suspense } from 'react'

const Home = () => {
  return (
    <main className="flex flex-wrap">
      <Suspense fallback={<ItemsSkeleton />}>
        <HomepageWrapper />
      </Suspense>
    </main>
  )
}

export default Home
