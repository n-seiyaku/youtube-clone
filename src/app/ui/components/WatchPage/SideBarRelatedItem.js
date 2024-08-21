import Image from 'next/image'
import { ProgressBarLink } from '../ProgressBar'

const SidebarRelatedItem = ({ videoId, thumbnail, title, channelName, views, relativeTime }) => {
  return (
    <ProgressBarLink href={`/watch?v=${videoId}`}>
      <div className="flex h-[5.875rem] mb-2">
        <div className="mr-2 w-[10.5rem] h-[5.875rem]">
          <Image className="rounded-lg" src={thumbnail} alt={title} width="9999" height="9999" priority={true} />
        </div>
        <div>
          <div className="text-sm font-medium text-ellipsis line-clamp-2 w-[202px] mb-1">{title}</div>
          <div className="flex flex-col">
            <div className="text-xs font-normal text-sub-text leading-[1.125rem]">{channelName}</div>
            <div className="text-xs font-normal text-sub-text leading-[1.125rem]">
              <span>{views} views</span>
              <span className="mx-1">•</span>
              <span>{relativeTime}</span>
            </div>
          </div>
        </div>
      </div>
    </ProgressBarLink>
  )
}

export default SidebarRelatedItem
