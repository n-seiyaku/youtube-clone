import { youtubeAuthService } from '@/app/api/user/route'

const checkIsSubcribe = async (channelId) => {
  try {
    const response = await youtubeAuthService.subscriptions.list({
      part: 'snippet',
      mine: true,
      forChannelId: channelId,
    })

    const totalResults = await response.data.pageInfo.totalResults
    return !!totalResults
  } catch (error) {
    console.log('checkIsSubcribe', error)
  }
}

export default checkIsSubcribe
