'use server'

import Image from 'next/image'
import getChannelPhoto from '@/api/getChannelPhoto'
import { getHomePage } from '@/api/fakeData'

const item = [
  {
    id: 1,
    title: 'Video 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://img.youtube.com/vi/3rqzJMbwRG8/maxresdefault.jpg',
  },
  {
    id: 2,
    title: 'Video 2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://img.youtube.com/vi/3rqzJMbwRG8/maxresdefault.jpg',
  },
  {
    id: 3,
    title: 'Video 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://img.youtube.com/vi/3rqzJMbwRG8/maxresdefault.jpg',
  },
  {
    id: 4,
    title: 'Video 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://img.youtube.com/vi/3rqzJMbwRG8/maxresdefault.jpg',
  },
  {
    id: 5,
    title: 'Video 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://img.youtube.com/vi/3rqzJMbwRG8/maxresdefault.jpg',
  },
  {
    id: 6,
    title: 'Video 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://img.youtube.com/vi/3rqzJMbwRG8/maxresdefault.jpg',
  },
  {
    id: 7,
    title: 'Video 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://img.youtube.com/vi/3rqzJMbwRG8/maxresdefault.jpg',
  },
]

const Home = async () => {
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

  const { homeData, uniqueChannelId } = await getHomePage()
  // const channelPhoto = await getChannelPhoto(uniqueChannelId)

  return (
    <main className="flex flex-wrap">
      {homeData.map((item) => (
        <div
          key={item.videoId}
          className="w-[calc((100%-32px)/3-16px-.01px)] mx-2 mb-10 [&:nth-child(3n)]:ml-6 [&:nth-child(3n)]:mr-2 "
        >
          <Image
            className="rounded-[0.75rem]"
            src={`https://i.ytimg.com/vi/${item.videoId}/hq720.jpg`}
            alt={item.title}
            width="9999"
            height="9999"
            priority="true"
          />
          <h3>{item.title}</h3>
          <Image src={item.channelPhoto} alt={item.channelName} width="36" height="36" priority="true" />
          <p>{item.channelName}</p>
          <p>{item.view}</p>
          <p>{item.relativeTime}</p>
        </div>
      ))}
    </main>
  )
}

export default Home
