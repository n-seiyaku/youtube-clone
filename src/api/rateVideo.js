import { youtubeAuthService } from '@/app/api/user/route'

const rateVideo = async (videoId, ratingType) => {
  try {
    const response = await youtubeAuthService.videos.rate({
      id: videoId,
      rating: ratingType,
    })

    console.log(response.data)
  } catch (error) {
    console.log('rate video:', error)
  }
}

export default rateVideo
