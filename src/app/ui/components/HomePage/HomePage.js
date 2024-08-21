import HomePageItem from './HomePageItem'
import { ItemsSkeleton } from '../../skeletons'
import { Suspense } from 'react'
import getHomePage from '@/api/getHomePage'

const HomePageWrapper = async () => {
  const response = await getHomePage('getHomePage')
  const homePageData = response.data

  return homePageData.map((item) => (
    <div
      key={item.videoId}
      className="w-[calc((100%-32px)/3-16px-.01px)] mx-2 mb-10 [&:nth-child(3n)]:ml-6 [&:nth-child(3n)]:mr-2"
    >
      <Suspense fallback={<ItemsSkeleton />}>
        <HomePageItem
          videoId={item.videoId}
          channelId={item.channelId}
          thumbnail={item.thumbnail}
          title={item.title}
          channelPhoto={item.channelPhoto}
          channelName={item.channelName}
          customUrl={item.customUrl}
          views={item.views}
          relativeTime={item.relativeTime}
        />
      </Suspense>
    </div>
  ))
}

export default HomePageWrapper
