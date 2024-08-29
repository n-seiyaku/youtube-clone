import { fakeChannelUrl, fakeHomepagePhotoRequest, fakeHomepageRequest } from './fakeHomepageRequest'

import getChannelPhotosAndCustomUrls from './getChannelPhotosAndCustomUrls'
import he from 'he'
import moment from 'moment'
import youtubeService from '@/api/apiConfig'

const getHomePage = async () => {
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

    const channelId = []

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
        views: '123',
        relativeTime: moment(item.snippet.publishTime).fromNow(),
      }

      channelId.push(item.snippet.channelId)
      homePageData.data.push(data)
    })

    const uniqueChannelId = [...new Set(channelId)]
    // const { channelPhotos, customUrls } = await getChannelPhotosAndCustomUrls(channelId)
    const channelPhotos = fakeHomepagePhotoRequest //fake
    const customUrls = fakeChannelUrl //fake

    homePageData.data.map((item) => {
      item.channelPhoto = channelPhotos[item.channelId]
      item.customUrl = customUrls[item.channelId]
    })

    return homePageData
  } catch (error) {
    console.log(error)
  }
}

export default getHomePage
