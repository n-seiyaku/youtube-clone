'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const ResultItem = ({ data }) => {
  const router = useRouter()

  const handleClickOnItem = (e) => {
    if (e.target.tagName !== 'A' && e.target.tagName !== 'IMG') {
      router.push(`/watch?v=${data.videoId}`)
    }
  }

  return (
    <div className="flex w-full mt-4">
      <div className="mr-4 shrink-0">
        <Link href={`/watch?v=${data.videoId}`}>
          <Image
            className="rounded-xl w-[31.25rem] h-auto"
            src={data.thumbnail}
            alt={data.title}
            width={0}
            height={0}
            sizes="100vw"
            priority
          />
        </Link>
      </div>
      <div className="w-[44.3rem] cursor-pointer" onClick={handleClickOnItem}>
        <h1 className="text-[1.125rem] font-normal text-ellipsis line-clamp-2">
          <Link href={`/watch?v=${data.videoId}`}>{data.title}</Link>
        </h1>
        <div className="text-xs font-normal text-sub-text">
          <span>{data.views} views</span>
          <span className="mx-1">•</span>
          <span>{data.relativeTime}</span>
        </div>
        <div className="flex items-center py-3">
          <div className="pr-2">
            <Link href={`/${data.customUrl}`}>
              <Image className="rounded-full" src={data.channelPhoto} alt={data.channelName} width={24} height={24} />
            </Link>
          </div>
          <div className="text-xs font-normal text-sub-text">
            <Link href={`/${data.customUrl}`}>{data.channelName}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResultItem
