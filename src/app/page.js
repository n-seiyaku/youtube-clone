import HomepageWrapper from '@/app/ui/homepage/homepage'
import { ItemsSkeleton } from './ui/skeletons'
import SideNav from './ui/sidenav'
import { Suspense } from 'react'

const Home = () => {
  return (
    <>
      <div className="flex-none w-60">
        <SideNav />
      </div>
      <div className="w-full pt-6 bg-test">
        <main className="flex flex-wrap">
          <Suspense fallback={<ItemsSkeleton />}>
            <HomepageWrapper />
          </Suspense>
        </main>
      </div>
    </>
  )
}

export default Home
