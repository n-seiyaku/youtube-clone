import HomePageWrapper from '@/app/ui/components/HomePage/HomePage'
import { ItemsSkeleton } from './ui/skeletons'
import SideNav from './ui/components/SideNav/SideNav'
import { Suspense } from 'react'

const Home = () => {
  return (
    <>
      <div className="flex-none w-60">
        <SideNav />
      </div>
      <div className="w-full pt-6">
        <main className="flex flex-wrap">
          <Suspense fallback={<ItemsSkeleton />}>
            <HomePageWrapper />
          </Suspense>
        </main>
      </div>
    </>
  )
}

export default Home
