'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const HomePageItem = ({
  videoId,
  channelId,
  thumbnail,
  title,
  channelPhoto,
  channelName,
  customUrl,
  views,
  relativeTime,
}) => {
  const router = useRouter()

  const handleClickOnItem = (e) => {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'IMG') {
      router.push(`/watch?v=${videoId}`)
    }
  }

  return (
    <div className="cursor-pointer">
      <div>
        <Link href={`/watch?v=${videoId}`}>
          <Image className="rounded-[0.75rem]" src={thumbnail} alt={title} width="9999" height="9999" priority />
        </Link>
      </div>
      <div className="flex mt-3" onClick={handleClickOnItem}>
        <div className="flex mr-3 w-9 h-9">
          <Link href={`/${customUrl}`}>
            <Image className="rounded-full" src={channelPhoto} alt={channelName} width="36" height="36" priority />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 font-medium line-clamp-2 text-ellipsis">
            <Link href={`/watch?v=${videoId}`}>{title}</Link>
          </div>
          <div className="text-sm text-sub-text">
            <Link href={`/${customUrl}`}>{channelName}</Link>
          </div>
          <div className="text-sm text-sub-text ">
            <span>{views} views</span>
            <span className="mx-1">•</span>
            <span>{relativeTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageItem
