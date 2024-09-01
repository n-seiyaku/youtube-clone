import { fakeChannelVideo } from '@/api/fakeChannelVideo'
import getChannelPhotosAndCustomUrls from '@/api/getChannelPhotosAndCustomUrls'
import getVideoView from '@/api/getVideoView'
import he from 'he'
import moment from 'moment'
import youtubeService from '@/api/apiConfig'

const getChannelVideo = async (channelId) => {
  try {
    // const response = await youtubeService.search.list({
    //   part: 'snippet',
    //   maxResults: 50,
    //   channelId,
    //   type: 'video',
    //   order: 'date',
    // })

    const response = fakeChannelVideo // fake

    const channelIds = []
    const videoIds = []

    const channelPageData = {
      data: [],
      nextPageToken: response.data?.nextPageToken || '',
    }

    response.items.map((item) => {
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
      channelPageData.data.push(data)
    })

    // const { channelPhotos, customUrls } = await getChannelPhotosAndCustomUrls(channelIds)
    // const videoViews = await getVideoView(videoIds)

    // channelPageData.data.map((item) => {
    //   item.channelPhoto = channelPhotos[item.channelId]
    //   item.customUrl = customUrls[item.channelId]
    //   item.views = videoViews[item.videoId]
    // })

    return {
      data: [
        {
          videoId: 'Tp6iPd70xyU',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/Tp6iPd70xyU/mqdefault.jpg',
          title: '＝LOVE - 絶対アイドル辞めないで / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '48354',
          relativeTime: 'a day ago',
        },
        {
          videoId: 'NJeAoHOEyoI',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/NJeAoHOEyoI/mqdefault.jpg',
          title: '＝LOVE - 絶対アイドル辞めないで / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '75173',
          relativeTime: '2 days ago',
        },
        {
          videoId: '90ghDaXOygs',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/90ghDaXOygs/mqdefault.jpg',
          title: '＝LOVE - 絶対アイドル辞めないで / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1041169',
          relativeTime: '2 days ago',
        },
        {
          videoId: 'pkb2ID-Q2eM',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/pkb2ID-Q2eM/mqdefault.jpg',
          title: 'aespa - Hot Mess / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '659200',
          relativeTime: '3 days ago',
        },
        {
          videoId: 'SNuJRCQXntk',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/SNuJRCQXntk/mqdefault.jpg',
          title: 'aespa - Hot Mess / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '660977',
          relativeTime: '4 days ago',
        },
        {
          videoId: 'rEmlS18xtRg',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/rEmlS18xtRg/mqdefault.jpg',
          title: 'aespa - Hot Mess / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1600025',
          relativeTime: '4 days ago',
        },
        {
          videoId: '3EXxIfC8RIY',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/3EXxIfC8RIY/mqdefault.jpg',
          title: 'asmi - UTAGE / FLASH THE FIRST TAKE  @asmiOfficialChannel',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '62343',
          relativeTime: '4 days ago',
        },
        {
          videoId: 'iOjA5QaJzGc',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/iOjA5QaJzGc/mqdefault.jpg',
          title: '梅田サイファー - スイッチ～BE THE MONSTERR / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '170305',
          relativeTime: '6 days ago',
        },
        {
          videoId: 'zkyXNQ6y54Q',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/zkyXNQ6y54Q/mqdefault.jpg',
          title: 'asmi - ラヴィウス / FLASH THE FIRST TAKE  @asmiOfficialChannel',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '66791',
          relativeTime: '6 days ago',
        },
        {
          videoId: '2fN96mm4Eyo',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/2fN96mm4Eyo/mqdefault.jpg',
          title: '梅田サイファー - スイッチ～BE THE MONSTERR / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '159651',
          relativeTime: '7 days ago',
        },
        {
          videoId: 'WBP4z5vRYcg',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/WBP4z5vRYcg/mqdefault.jpg',
          title: '梅田サイファー - スイッチ～BE THE MONSTERR / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '734906',
          relativeTime: '7 days ago',
        },
        {
          videoId: 'DWsJOxbbdaw',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/DWsJOxbbdaw/mqdefault.jpg',
          title: 'Aqua Timez - 千の夜をこえて / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '107402',
          relativeTime: '8 days ago',
        },
        {
          videoId: '6LRLm6hXaWs',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/6LRLm6hXaWs/mqdefault.jpg',
          title: 'Aqua Timez - 千の夜をこえて / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '155270',
          relativeTime: '9 days ago',
        },
        {
          videoId: 'bnGeffp4anY',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/bnGeffp4anY/mqdefault.jpg',
          title: 'Aqua Timez - 千の夜をこえて / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '2985735',
          relativeTime: '9 days ago',
        },
        {
          videoId: 'YkUGPEHQQS4',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/YkUGPEHQQS4/mqdefault.jpg',
          title: '爆風スランプ - Runner / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '142767',
          relativeTime: '14 days ago',
        },
        {
          videoId: '94u4OEBKBB8',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/94u4OEBKBB8/mqdefault.jpg',
          title: '爆風スランプ - Runner / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '2143830',
          relativeTime: '14 days ago',
        },
        {
          videoId: 'rguOPiAZhNk',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/rguOPiAZhNk/mqdefault.jpg',
          title: 'ねぐせ。 - ずっと好きだから / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '494443',
          relativeTime: '16 days ago',
        },
        {
          videoId: 'euaExSVF8oo',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/euaExSVF8oo/mqdefault.jpg',
          title: '梅田サイファー - Rodeo13 / FLASH THE FIRST TAKE @umedacypher',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '80645',
          relativeTime: '16 days ago',
        },
        {
          videoId: '133xQxW_74M',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/133xQxW_74M/mqdefault.jpg',
          title: 'aespa - Supernova / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1085676',
          relativeTime: '17 days ago',
        },
        {
          videoId: 'sB9z8zdbhqA',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/sB9z8zdbhqA/mqdefault.jpg',
          title: 'aespa - Supernova / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '3694532',
          relativeTime: '18 days ago',
        },
        {
          videoId: 'EsHQB9gT96k',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/EsHQB9gT96k/mqdefault.jpg',
          title: 'aespa - Supernova / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '7419713',
          relativeTime: '18 days ago',
        },
        {
          videoId: 'd3rj0OAZhtY',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/d3rj0OAZhtY/mqdefault.jpg',
          title: '梅田サイファー - 韋駄天s**t / FLASH THE FIRST TAKE @umedacypher',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '81326',
          relativeTime: '18 days ago',
        },
        {
          videoId: 'JsM5C8PGlmA',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/JsM5C8PGlmA/mqdefault.jpg',
          title: 'Aqua Timez - 虹 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '486869',
          relativeTime: '20 days ago',
        },
        {
          videoId: 'zvK3tomDuqk',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/zvK3tomDuqk/mqdefault.jpg',
          title: 'adieu - 背中 /  FLASH THE FIRST TAKE @adieu_official',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '159062',
          relativeTime: '20 days ago',
        },
        {
          videoId: 'WIYfm6ec2Fw',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/WIYfm6ec2Fw/mqdefault.jpg',
          title: '60秒限りの一発撮り。FLASH THE FIRST TAKE、はじまる。 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '62829',
          relativeTime: '20 days ago',
        },
        {
          videoId: 'GxQC3pqoA9Y',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/GxQC3pqoA9Y/mqdefault.jpg',
          title: '60秒限りの一発撮り。FLASH THE FIRST TAKE、はじまる。 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '155428',
          relativeTime: '20 days ago',
        },
        {
          videoId: 'OoB1ejBdaxQ',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/OoB1ejBdaxQ/mqdefault.jpg',
          title: 'Aqua Timez - 虹 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '3862115',
          relativeTime: '21 days ago',
        },
        {
          videoId: 'FXcJ-Ysm5wM',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/FXcJ-Ysm5wM/mqdefault.jpg',
          title: 'Aqua Timez - 虹 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '382743',
          relativeTime: '21 days ago',
        },
        {
          videoId: 'Szn9Ka3UVjY',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/Szn9Ka3UVjY/mqdefault.jpg',
          title: '離婚伝説 - 本日のおすすめ / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '49748',
          relativeTime: '21 days ago',
        },
        {
          videoId: 'k8x1h7V8gJo',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/k8x1h7V8gJo/mqdefault.jpg',
          title: '離婚伝説 - 本日のおすすめ / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1166448',
          relativeTime: '23 days ago',
        },
        {
          videoId: 'cbDLzsVWaLg',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/cbDLzsVWaLg/mqdefault.jpg',
          title: 'ねぐせ。 - 日常革命 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '124807',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'i9o1H3w5Og4',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/i9o1H3w5Og4/mqdefault.jpg',
          title: 'ねぐせ。 - 日常革命 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '742069',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'pG2icHolXQk',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/pG2icHolXQk/mqdefault.jpg',
          title: '長谷川白紙 - 外 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '65152',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'V-brD8MsdcY',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/V-brD8MsdcY/mqdefault.jpg',
          title: '長谷川白紙 - 外 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '992368',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'mmirMhm9-C4',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/mmirMhm9-C4/mqdefault.jpg',
          title: '離婚伝説 - 愛が一層メロウ / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '52508',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'g1QrVFOE0N8',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/g1QrVFOE0N8/mqdefault.jpg',
          title: '離婚伝説 - 愛が一層メロウ / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '88644',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'FjqOewrkH4o',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/FjqOewrkH4o/mqdefault.jpg',
          title: '離婚伝説 - 愛が一層メロウ / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1030481',
          relativeTime: 'a month ago',
        },
        {
          videoId: '51cjgUurLYo',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/51cjgUurLYo/mqdefault.jpg',
          title: '大塚 愛 - さくらんぼーカクテルー / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '814653',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'sEFVNRI3gJ4',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/sEFVNRI3gJ4/mqdefault.jpg',
          title: '大塚 愛 - さくらんぼーカクテルー / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '270543',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'AQezyVAJL7Q',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/AQezyVAJL7Q/mqdefault.jpg',
          title: '大塚 愛 - さくらんぼーカクテルー / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1247090',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'd3ETQKC592g',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/d3ETQKC592g/mqdefault.jpg',
          title: 'BOYNEXTDOOR - Earth, Wind & Fire (Japanese Ver.) / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '173215',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'myGng9A6go4',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/myGng9A6go4/mqdefault.jpg',
          title: 'BOYNEXTDOOR - Earth, Wind & Fire (Japanese Ver.) / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '203875',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'jgjlCcnePk4',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/jgjlCcnePk4/mqdefault.jpg',
          title: 'BOYNEXTDOOR - Earth, Wind & Fire (Japanese Ver.) / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1525144',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'uAL2CvT6n2w',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/uAL2CvT6n2w/mqdefault.jpg',
          title: '長谷川白紙 - 草木 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '101418',
          relativeTime: 'a month ago',
        },
        {
          videoId: '9Ykf2IUA55E',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/9Ykf2IUA55E/mqdefault.jpg',
          title: '長谷川白紙 - 草木 / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1007746',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'RB3Wxvp-Jho',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/RB3Wxvp-Jho/mqdefault.jpg',
          title: 'ASIAN KUNG-FU GENERATION - 転がる岩、君に朝が降る / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '93018',
          relativeTime: 'a month ago',
        },
        {
          videoId: '1ynJsSsPY3U',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/1ynJsSsPY3U/mqdefault.jpg',
          title: "ASIAN KUNG-FU GENERATION - Rockn' Roll, Morning Light Falls on You / THE FIRST TAKE",
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1159946',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'x-dQ1e84XYU',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/x-dQ1e84XYU/mqdefault.jpg',
          title: 'SB19 - MAPA / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '1562524',
          relativeTime: 'a month ago',
        },
        {
          videoId: 'Wj5Usg_2Q7c',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/Wj5Usg_2Q7c/mqdefault.jpg',
          title: '大塚 愛 - プラネタリウム / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '248710',
          relativeTime: '2 months ago',
        },
        {
          videoId: '5nNoBH_VCF0',
          channelId: 'UC9zY_E8mcAo_Oq772LEZq8Q',
          thumbnail: 'https://i.ytimg.com/vi/5nNoBH_VCF0/mqdefault.jpg',
          title: '大塚 愛 - プラネタリウム / THE FIRST TAKE',
          channelPhoto:
            'https://yt3.ggpht.com/gPmI6mWUqMSqw5UcjOWwg4Lk6POQkI793PDVd781CzkJSRNV7FTiaumbHTupXqb9x3OLgbMQ_Sw=s240-c-k-c0x00ffffff-no-rj',
          channelName: 'THE FIRST TAKE',
          customUrl: '@the_firsttake',
          views: '368954',
          relativeTime: '2 months ago',
        },
      ],
      nextPageToken: '',
    }

    return channelPageData
  } catch (error) {
    console.log('getChannelVideo', error)
  }
}

export default getChannelVideo
