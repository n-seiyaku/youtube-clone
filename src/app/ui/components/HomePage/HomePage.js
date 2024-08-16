import HomePageItem from './HomePageItem'
import { ItemsSkeleton } from '../../skeletons'
import { Suspense } from 'react'
import getHomePage from '@/api/getHomePage'

const HomePageWrapper = async () => {
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
