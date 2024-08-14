import Image from 'next/image'
import { getHomepage } from '@/api/getHomepage'
import { getRelatedVideo } from '@/api/serpapiConfig'

const SidebarRelatedVideos = async () => {
  return
}

const SidebarRelatedItem = async () => {
  // const relatedVideos = await getRelatedVideo()

  // console.log(relatedVideos)

  return (
    <div className="flex h-[5.875rem]">
      <div className="10.5rem">
        {/* <Image
          src={relatedVideos[0].thumbnail.static}
          alt={relatedVideos[0].title}
          width="9999"
          height="9999"
          priority={true}
        /> */}
      </div>
      <div className="">
        {/* <div>{relatedVideos[0].title}</div>
        <div>{relatedVideos[0].channel.name}</div> */}
      </div>
    </div>
  )
}

export { SidebarRelatedItem }
export default SidebarRelatedVideos
