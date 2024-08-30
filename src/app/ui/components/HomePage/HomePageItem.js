'use client'

import { ProgressBarLink, useProgressBar } from '@/app/ui/components/ProgressBar'

import Image from 'next/image'
import formatView from '@/app/utils/formatView'
import { startTransition } from 'react'
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
  const progress = useProgressBar()

  const handleClickOnItem = (e) => {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'IMG') {
      progress.start()

      startTransition(() => {
        router.push(`/watch?v=${videoId}`)
        progress.done()
      })
    }
  }

  return (
    <div className="cursor-pointer">
      <div>
        <ProgressBarLink href={`/watch?v=${videoId}`}>
          <Image className="rounded-[0.75rem]" src={thumbnail} alt={title} width="9999" height="9999" priority />
        </ProgressBarLink>
      </div>
      <div className="flex mt-3" onClick={handleClickOnItem}>
        <div className="mr-3 w-9 h-9 shrink-0">
          <ProgressBarLink href={`/${customUrl}`}>
            <Image className="rounded-full" src={channelPhoto} alt={channelName} width="36" height="36" priority />
          </ProgressBarLink>
        </div>
        <div className="line-clamp-2 text-ellipsis grow">
          <div className="flex flex-col">
            <div className="mb-1 font-medium line-clamp-2 text-ellipsis">
              <ProgressBarLink href={`/watch?v=${videoId}`}>{title}</ProgressBarLink>
            </div>
            <div className="text-sm text-sub-text">
              <ProgressBarLink href={`/${customUrl}`}>{channelName}</ProgressBarLink>
            </div>
            <div className="text-sm text-sub-text">
              <span>{formatView(views)} views</span>
              <span className="mx-1">•</span>
              <span>{relativeTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePageItem
