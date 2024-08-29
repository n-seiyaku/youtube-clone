import { youtubeAuthService } from '@/app/api/user/route'

const rateVideo = async (videoId, typeRate) => {
  try {
    const response = await youtubeAuthService.videos.rate({
      id: videoId,
      rating: typeRate,
    })
  } catch (error) {
    console.log(error)
  }
}

export default rateVideo
