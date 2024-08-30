import Description from '../ui/components/WatchPage/Description'
import SidebarRelatedVideos from '../ui/components/WatchPage/SideBarRelatedVideos'
import TitleVideo from '../ui/components/WatchPage/TitleVideo'
import dynamic from 'next/dynamic'
import getWatchPage from '@/api/getWatchPage'

const PlayerNoSSR = dynamic(() => import('../ui/components/WatchPage/YoutubePlayer'), { ssr: false })
const Page = async ({ searchParams }) => {
  const videoId = searchParams.v
  const watchPageData = await getWatchPage(videoId)

  return (
    <div className="flex justify-center w-full">
      <div className="w-[895.812px] pt-6 pr-6 ml-6">
        <PlayerNoSSR videoId={searchParams.v} />

        <TitleVideo watchPageData={watchPageData} />

        <Description watchPageData={watchPageData} videoId={searchParams.v} />
      </div>
      <div className="w-[26.625rem] min-w-[18.75rem] pt-6 pr-6">
        <SidebarRelatedVideos videoId={videoId} />
      </div>
    </div>
  )
}

export default Page
