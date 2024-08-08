'use server'

import youtubeService from '@/api/apiConfig'

const getChannelPhoto = async (channelIds) => {
  try {
    const response = await youtubeService.channels.list({
      part: 'snippet',
      maxResults: 20,
      id: channelIds,
    })

    let channelPhotos = {}

    response.data.items.map((item) => {
      channelPhotos = {
        ...channelPhotos,
        [item.id]: item.snippet.thumbnails.medium.url,
      }
    })
    return channelPhotos
  } catch (error) {
    console.log(error)
  }
}

export default getChannelPhoto
