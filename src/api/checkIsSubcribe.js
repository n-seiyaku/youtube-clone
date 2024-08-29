import { youtubeAuthService } from '@/app/api/user/route'

const checkIsSubcribe = async (channelId) => {
  const response = await youtubeAuthService.subscriptions.list({
    part: 'snippet',
    mine: true,
    // forChannelId: channelId,
    forChannelId: 'UCGZdo_u3M44DnGrLtco86-A',
  })

  const totalResults = await response.data.pageInfo.totalResults
  return !!totalResults
}

export default checkIsSubcribe
