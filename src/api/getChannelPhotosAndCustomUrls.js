import youtubeService from '@/api/apiConfig'

const getChannelPhotosAndCustomUrls = async (channelIds) => {
  try {
    const response = await youtubeService.channels.list({
      part: 'snippet',
      maxResults: 20,
      id: channelIds,
    })

    let channelPhotos = {}
    let customUrl = {}

    response.data.items.map((item) => {
      channelPhotos = {
        ...channelPhotos,
        [item.id]: item.snippet.thumbnails.medium.url,
      }

      customUrl = {
        ...customUrl,
        [item.id]: item.snippet.customUrl,
      }
    })

    return { channelPhotos, customUrl }
  } catch (error) {
    console.log(error)
  }
}

export default getChannelPhotosAndCustomUrls
