import Image from 'next/image'
import { ItemsSkeleton } from '../skeletons'
import Link from 'next/link'
import { Suspense } from 'react'
import { getHomepage } from '@/api/getHomepage'

export const HomepageItem = ({
  videoId,
  channelId,
  thumbnail,
  title,
  channelPhoto,
  channelName,
  view,
  relativeTime,
}) => {
  return (
    // chua hoan thanh phan Link cho toan bo the div
    <>
      <Link href={`/watch?v=${videoId}`}>
        <Image className="rounded-[0.75rem]" src={thumbnail} alt={title} width="9999" height="9999" priority />
      </Link>
      <div className="flex mt-3">
        <div className="mr-3 min-w-9">
          <Link href={`/${channelId}`}>
            <Image className="rounded-full" src={channelPhoto} alt={channelName} width="36" height="36" priority />
          </Link>
        </div>
        <div className="flex flex-col">
          <div className="mb-1 font-medium line-clamp-2 text-ellipsis">
            <Link href={`/watch?v=${videoId}`}>{title.toUpperCase()}</Link>
          </div>
          <div className="text-sm text-sub-text">
            <Link href={`/${channelId}`}>{channelName}</Link>
          </div>
          <div className="text-sm text-sub-text ">
            <span>{view} views</span>
            <span className="mx-1">•</span>
            <span>{relativeTime}</span>
          </div>
        </div>
      </div>
    </>
  )
}

const HomepageWrapper = async () => {
  // const [tokenData, setTokenData] = useState({
  //   access_token: '',
  //   token_type: '',
  //   expires_in: '',
  //   scope: '',
  // })

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const hash = window.location.hash.substring(1)
  //     const params = new URLSearchParams(hash)

  //     localStorage.setItem('access_token', params.get('access_token'))
  //     localStorage.setItem('token_type', params.get('token_type'))
  //     localStorage.setItem('expires_in', params.get('expires_in'))
  //     localStorage.setItem('scope', params.get('scope'))
  //   }
  // }, [])

  const homepageData = await getHomepage()

  return <div>anime</div>

  return homepageData.map((item) => (
    <div
      key={item.videoId}
      className="w-[calc((100%-32px)/3-16px-.01px)] mx-2 mb-10 [&:nth-child(3n)]:ml-6 [&:nth-child(3n)]:mr-2"
    >
      <Suspense fallback={<ItemsSkeleton />}>
        <HomepageItem
          videoId={item.videoId}
          channelId={item.channelId}
          thumbnail={item.thumbnail}
          title={item.title}
          channelPhoto={item.channelPhoto}
          channelName={item.channelName}
          view={item.view}
          relativeTime={item.relativeTime}
        />
      </Suspense>
    </div>
  ))
}

export default HomepageWrapper
