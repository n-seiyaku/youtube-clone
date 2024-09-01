import { fakeChannelUrl, fakeHomepagePhotoRequest, fakeHomepageRequest, fakeView } from '@/api/fakeHomepageRequest'

import getChannelPhotosAndCustomUrls from '@/api/getChannelPhotosAndCustomUrls'
import getVideoView from '@/api/getVideoView'
import he from 'he'
import moment from 'moment'
import youtubeService from '@/api/apiConfig'

const getHomePage = async (nextPageToken = '') => {
  try {
    // const response = await youtubeService.search.list({
    //   part: 'snippet',
    //   maxResults: 50,
    //   q: '',
    //   type: 'video',
    //   regionCode: 'VN',
    //   order: 'date',
    //   relevanceLanguage: 'vi',
    //   nextPageToken: nextPageToken,
    // })
    const response = fakeHomepageRequest //fake

    const channelIds = []
    const videoIds = []

    const homePageData = {
      data: [],
      nextPageToken: response.data?.nextPageToken || '',
    }

    response.data.items.map((item) => {
      const data = {
        videoId: item.id.videoId,
        channelId: item.snippet.channelId,
        thumbnail: `https://i.ytimg.com/vi/${item.id.videoId}/mqdefault.jpg`,
        title: he.decode(item.snippet.title),
        channelPhoto: '',
        channelName: item.snippet.channelTitle,
        customUrl: '',
        views: '',
        relativeTime: moment(item.snippet.publishTime).fromNow(),
      }

      videoIds.push(data.videoId)
      channelIds.push(data.channelId)
      homePageData.data.push(data)
    })

    // const { channelPhotos, customUrls } = await getChannelPhotosAndCustomUrls(channelIds)
    // const videoViews = await getVideoView(videoIds)
    const videoViews = fakeView //fake
    const channelPhotos = fakeHomepagePhotoRequest //fake
    const customUrls = fakeChannelUrl //fake

    homePageData.data.map((item) => {
      item.channelPhoto = channelPhotos[item.channelId]
      item.customUrl = customUrls[item.channelId]
      item.views = videoViews[item.videoId]
    })

    return homePageData
  } catch (error) {
    console.log(error)
  }
}

export default getHomePage
