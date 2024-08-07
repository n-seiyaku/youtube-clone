import he from 'he'
import moment from 'moment'

export const getHomePage = async () => {
  try {
    const fakeData = {
      kind: 'youtube#searchListResponse',
      etag: 'EUNtCDrgzWrpo1Ql_js0u9hDJyg',
      nextPageToken: 'CBQQAA',
      regionCode: 'VN',
      pageInfo: {
        totalResults: 737293,
        resultsPerPage: 20,
      },
      items: [
        {
          kind: 'youtube#searchResult',
          etag: 'qGDMjeIl-nStcLrbtkCxaCAr-Ds',
          id: {
            kind: 'youtube#video',
            videoId: 'ZrPbD8iwjak',
          },
          snippet: {
            publishedAt: '2024-08-04T10:00:28Z',
            channelId: 'UCkB8HnJSDSJ2hkLQFUc-YrQ',
            title:
              'Bản Tin BÓC PHỐT #173 | SKIBIDI &quot;Đánh Bàn Quyền&quot; Garry&#39;s Mod &amp; Mỳ Tôm Game Thủ | GCH News',
            description:
              'Chơi Game Bản Quyền Giá Siêu Rẻ với RevoltG: https://revolt.vn/ ------------------------------------------------------- Bản Tin BÓC PHỐT ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/ZrPbD8iwjak/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/ZrPbD8iwjak/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/ZrPbD8iwjak/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Game Cực Hay',
            liveBroadcastContent: 'none',
            publishTime: '2024-08-04T10:00:28Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'z5xWBYUPtPuYJQN1OmzS4hidfvs',
          id: {
            kind: 'youtube#video',
            videoId: 'nGbogzz9IHE',
          },
          snippet: {
            publishedAt: '2024-07-28T10:32:00Z',
            channelId: 'UCOvu_XgzASRa0ntQhTFA0rg',
            title: 'Bản Tin BÓC PHỐT #172 | &quot;Overwatch&quot; Phake Của Sony &amp; Thất Bại Của Capcom | GCH News',
            description:
              'Chơi Game Bản Quyền Giá Siêu Rẻ với RevoltG: https://revolt.vn/ ------------------------------------------------------- Bản Tin BÓC PHỐT ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/nGbogzz9IHE/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/nGbogzz9IHE/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/nGbogzz9IHE/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Game Cực Hay',
            liveBroadcastContent: 'none',
            publishTime: '2024-07-28T10:32:00Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'jPK6r2pxhkmJ4Wejz7yJaC2g56Y',
          id: {
            kind: 'youtube#video',
            videoId: 'cu4vle3G9Co',
          },
          snippet: {
            publishedAt: '2024-06-30T10:00:35Z',
            channelId: 'UCOvu_XgzASRa0ntQhTFA0rg',
            title: 'Bản Tin BÓC PHỐT #168 | 1* Vì QUÁ KHÓ &amp; 19 Tỷ Đô LÃNG PHÍ Cho Video Game | GCH News',
            description:
              'Chơi Game Bản Quyền Giá Siêu Rẻ với RevoltG: https://revolt.vn/ ------------------------------------------------------- Bản Tin BÓC PHỐT ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/cu4vle3G9Co/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/cu4vle3G9Co/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/cu4vle3G9Co/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Game Cực Hay',
            liveBroadcastContent: 'none',
            publishTime: '2024-06-30T10:00:35Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: '3p1XhY3YvXfoDGPadhDdfhCQJHU',
          id: {
            kind: 'youtube#video',
            videoId: 'Tn6k6zRktGU',
          },
          snippet: {
            publishedAt: '2024-07-21T10:59:36Z',
            channelId: 'UCOvu_XgzASRa0ntQhTFA0rg',
            title:
              'Bản Tin BÓC PHỐT #171 | MiHoYo Bị Phản Đối Vì &quot;Da Quá TRẮNG&quot; &amp; Nhà Tù Mỹ Mua Game Tiền Tỷ | GCH News',
            description:
              'Chơi Game Bản Quyền Giá Siêu Rẻ với RevoltG: https://revolt.vn/ ------------------------------------------------------- Bản Tin BÓC PHỐT ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/Tn6k6zRktGU/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/Tn6k6zRktGU/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/Tn6k6zRktGU/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Game Cực Hay',
            liveBroadcastContent: 'none',
            publishTime: '2024-07-21T10:59:36Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'lEamLJBVccYes_mzblSxWKQmuy4',
          id: {
            kind: 'youtube#video',
            videoId: 'o2FQLSRg9Ps',
          },
          snippet: {
            publishedAt: '2024-07-07T10:00:41Z',
            channelId: 'UCOvu_XgzASRa0ntQhTFA0rg',
            title: 'Bản Tin BÓC PHỐT #169 | Bạn Gái Ảo 2.0 &amp; Vô Địch Nhưng MẤT TIỀN | GCH News',
            description:
              'Chơi Game Bản Quyền Giá Siêu Rẻ với RevoltG: https://revolt.vn/ ------------------------------------------------------- Bản Tin BÓC PHỐT ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/o2FQLSRg9Ps/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/o2FQLSRg9Ps/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/o2FQLSRg9Ps/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Game Cực Hay',
            liveBroadcastContent: 'none',
            publishTime: '2024-07-07T10:00:41Z',
          },
        },
        {
          kind: 'youtube#searchResult',
          etag: 'i3PlQxK7vNbc1kzab0jvlcXKWjU',
          id: {
            kind: 'youtube#video',
            videoId: 'j11Ph2aZDpw',
          },
          snippet: {
            publishedAt: '2024-06-16T10:00:44Z',
            channelId: 'UCOvu_XgzASRa0ntQhTFA0rg',
            title: 'Bản Tin BÓC PHỐT #166 | VCS Bị XỬ TỬ &amp; Doom The Dark Ages Sẽ Có Gì? | GCH News',
            description:
              'Chơi Game Bản Quyền Giá Siêu Rẻ với RevoltG: https://revolt.vn/ ------------------------------------------------------- Bản Tin BÓC PHỐT ...',
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/j11Ph2aZDpw/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/j11Ph2aZDpw/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/j11Ph2aZDpw/hqdefault.jpg',
                width: 480,
                height: 360,
              },
            },
            channelTitle: 'Game Cực Hay',
            liveBroadcastContent: 'none',
            publishTime: '2024-06-16T10:00:44Z',
          },
        },
      ],
    }

    // Home video data = {videoId,
    // channelId,
    // thumbnail,
    // title,
    // channelPhoto,
    // channelTitle,
    // view,
    // publishTime
    // }

    const channelId = []

    const homeData = []

    fakeData.items.map((item) => {
      const data = {
        videoId: item.id.videoId,
        channelId: item.snippet.channelId,
        thumbnail: `https://i.ytimg.com/vi/${item.id.videoId}/hq720.jpg`,
        title: he.decode(item.snippet.title),
        channelPhoto:
          'https://yt3.ggpht.com/U5p7B5XlCYkW9oRJ3rbfheANMhbC2W5JiQWnyTsGZ5aEbAYnUcCIGgw3xNLLxGVt6KY423D65Hw=s240-c-k-c0x00ffffff-no-rj',
        channelName: item.snippet.channelTitle,
        view: '123',
        relativeTime: moment(item.snippet.publishTime).fromNow(),
      }

      channelId.push(item.snippet.channelId)
      homeData.push(data)
    })

    const uniqueChannelId = [...new Set(channelId)]

    return { homeData, uniqueChannelId }
  } catch (error) {
    console.log(error)
  }
}
