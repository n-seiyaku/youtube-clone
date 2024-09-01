import SidebarRelatedItem from '@/app/ui/components/WatchPage/SideBarRelatedItem'
import formatView from '@/app/utils/formatView'
import { getRelatedVideo } from '@/api/serpapiConfig'

const SidebarRelatedVideos = async ({ videoId }) => {
  const relatedVideos = await getRelatedVideo(videoId)

  return relatedVideos.map((item) => {
    return (
      <SidebarRelatedItem
        key={item.video_id}
        videoId={item.video_id}
        thumbnail={`https://i.ytimg.com/vi/${item.video_id}/mqdefault.jpg`}
        title={item.title}
        channelName={item.channel.name}
        views={formatView(item.extracted_views)}
        relativeTime={item.published_date}
      />
    )
  })
}

export default SidebarRelatedVideos
