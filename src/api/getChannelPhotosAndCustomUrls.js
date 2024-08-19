import youtubeService from '@/api/apiConfig'

const getChannelPhotosAndCustomUrls = async (channelIds) => {
  try {
    const response = await youtubeService.channels.list({
      part: 'snippet',
      maxResults: 20,
      id: channelIds,
    })

    let channelPhotos = {}
    let customUrls = {}

    response.data.items.map((item) => {
      channelPhotos = {
        ...channelPhotos,
        [item.id]: item.snippet.thumbnails.medium.url,
      }

      customUrls = {
        ...customUrls,
        [item.id]: item.snippet.customUrl,
      }
    })

    return { channelPhotos, customUrls }
  } catch (error) {
    console.log(error)
  }
}

export default getChannelPhotosAndCustomUrls
