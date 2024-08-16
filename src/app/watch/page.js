import Image from 'next/image'
import SidebarRelatedVideos from '../ui/components/WatchPage/SideBarRelatedVideos'
import dynamic from 'next/dynamic'
import getWatchPage from '@/api/getWatchPage'

const PlayerNoSSR = dynamic(() => import('../ui/components/WatchPage/YoutubePlayer'), { ssr: false })
const Page = async ({ searchParams }) => {
  const watchPageData = await getWatchPage(searchParams.v)

  return (
    <div className="flex justify-center w-full h-[2000px]">
      <div className="w-[895.812px] pt-6 pr-6 ml-6">
        <PlayerNoSSR videoId={searchParams.v} />
        <div className="mt-3 mb-6">
          <div className="text-xl font-bold text-main-text">
            <span>{watchPageData.title}</span>
          </div>
          <div className="flex mt-3">
            <div className="mr-3">
              <Image
                className="rounded-full"
                src={watchPageData.channelPhoto}
                alt={watchPageData.channelName}
                width="40"
                height="40"
              />
            </div>
            <div className="flex flex-col text-main-text">
              <div className="text-base font-medium leading-[1.375rem]">{watchPageData.channelName}</div>
              <div className="text-xs font-normal text-sub-text leading-[1.125rem]">
                {watchPageData.subscriberCount} subscribers
              </div>
            </div>
            <div>
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[26.625rem] min-w-[18.75rem] pt-6 pr-6">
        <SidebarRelatedVideos />
      </div>
    </div>
  )
}

export default Page
