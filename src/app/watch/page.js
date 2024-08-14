import { SidebarRelatedItem } from '@/app/ui/components/sideBarRelatedVideos'
import dynamic from 'next/dynamic'

const PlayerNoSSR = dynamic(() => import('../ui/watch/Player'), { ssr: false })
const Page = async ({ searchParams }) => {
  return (
    <div className="flex justify-center w-full h-[2000px]">
      <div className="w-[895.812px] pt-6 pr-6 ml-6">
        <PlayerNoSSR videoId={searchParams.v} />
      </div>
      <div className="w-[26.625rem] min-w-[18.75rem] pt-6 pr-6">
        <SidebarRelatedItem />
      </div>
    </div>
  )
}

export default Page
