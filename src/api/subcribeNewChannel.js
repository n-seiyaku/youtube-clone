import { youtubeAuthService } from '@/app/api/user/route'

const subcribeNewChannel = async (channelId) => {
  try {
    const response = await youtubeAuthService.subscriptions.insert({
      part: 'snippet',
      requestBody: {
        snippet: {
          resourceId: {
            channelId,
          },
        },
      },
    })

    return response.data
  } catch (error) {
    console.log('subcribe new channel error: ' + error)
  }
}

export default subcribeNewChannel
