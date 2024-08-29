import formatDate from '@/app/utils/formatDate'
import formatView from '@/app/utils/formatView'
import youtubeService from '@/api/apiConfig'

const getVideoInfo = async (videoId) => {
  try {
    const response = await youtubeService.videos.list({
      part: 'snippet,statistics',
      id: videoId,
    })

    const snippet = response.data.items[0].snippet
    const statistics = response.data.items[0].statistics

    const videoInfo = {
      channelId: snippet.channelId,
      title: snippet.title,
      channelName: snippet.channelTitle,
      viewCount: statistics.viewCount,
      likeCount: formatView(statistics.likeCount),
      publishedAt: snippet.publishedAt,
      description: snippet.description,
      commentCount: statistics.commentCount,
    }

    return videoInfo
  } catch (error) {
    console.log(error)
  }
}

export default getVideoInfo
