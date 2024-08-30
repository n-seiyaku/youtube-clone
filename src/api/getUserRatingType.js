import { youtubeAuthService } from '@/app/api/user/route'

const getUserRatingType = async (videoId) => {
  try {
    const response = await youtubeAuthService.videos.getRating({
      id: videoId,
    })

    const ratingType = response.data.items[0].rating

    return ratingType
  } catch (error) {
    console.log('getUserRatingType', error)
  }
}

export default getUserRatingType
