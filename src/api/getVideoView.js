import youtubeService from '@/api/apiConfig'

const getVideoView = async (videoId) => {
  try {
    const response = await youtubeService.videos.list({
      part: 'statistics',
      id: videoId,
    })

    let videoViews = {}

    response.data.items.map((item) => {
      videoViews = {
        ...videoViews,
        [item.id]: item.statistics.viewCount,
      }
    })

    return videoViews
  } catch (error) {
    console.log('getVideoView', error)
  }
}

export default getVideoView
