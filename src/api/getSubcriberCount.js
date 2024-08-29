import youtubeService from '@/api/apiConfig'

const getSubcriberCount = async (channelId) => {
  try {
    const response = await youtubeService.channels.list({
      part: 'statistics',
      id: channelId,
    })

    const subscribers = response.data.items[0].statistics.subscriberCount

    return subscribers
  } catch (error) {
    console.log(error)
  }
}

export default getSubcriberCount
