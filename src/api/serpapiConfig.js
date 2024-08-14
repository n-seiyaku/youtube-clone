import { config, getJson, getJsonBySearchId } from 'serpapi'

import { fakeRelatedVideo } from './fakeRelatedVideo'

config.apiKey = process.env.LAN_1_SERP_API_KEY

const getRelatedVideo = async (videoId) => {
  // const response = await getJson({
  //   api_key: 'c3d22410603e6c0f5fadd828a61d23a926c381c89e0afd928d400ab3cf3c0e6f',
  //   engine: 'youtube_video',
  //   v: 'aEULsx2BmD4',
  // })

  const response = fakeRelatedVideo
  const relatedVideos = response.related_videos

  return relatedVideos
}

export { getRelatedVideo }
