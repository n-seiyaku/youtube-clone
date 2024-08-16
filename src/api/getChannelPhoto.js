import youtubeService from '@/api/apiConfig'

const getChannelPhoto = async (channelId) => {
  try {
    const response = await youtubeService.channels.list({
      part: 'snippet',
      maxResults: 20,
      id: channelId,
    })

    const channelPhoto = response.data.items[0].snippet.thumbnails.default.url

    return channelPhoto
  } catch (error) {
    console.log(error)
  }
}

export default getChannelPhoto
