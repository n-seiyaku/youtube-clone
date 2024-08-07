'use server'

import youtubeService from '@/api/apiConfig'

const getChannelPhoto = async (channelIds) => {
  const data = {
    kind: 'youtube#channelListResponse',
    etag: 'j_6xart4XA3cYN2xOzSi3AuBYV8',
    pageInfo: {
      totalResults: 2,
      resultsPerPage: 5,
    },
    items: [
      {
        kind: 'youtube#channel',
        etag: '-ukJRiqsDbGanWpmOnpxKmsGmVA',
        id: 'UCWVPMvxfAAXuc1TcAeEI9UA',
        snippet: {
          title: 'Podcast Truy Lùng Dấu Vết',
          description:
            'Kênh Youtube của podcast Truy Lùng Dấu Vết.\n\n_____\n\nTội Ác. Điều tra. Con người. Câu chuyện. Một true crime podcast về những vụ án có thật cùng quá trình truy tìm thủ phạm của chúng; xâu chuỗi lại từ các bài báo, hồ sơ toà án, lời người trong cuộc, v.v.\n\nTần suất: 2~3 tuần một tập, nếu tôi không lươ- … uhm … bận.\n\n',
          customUrl: '@truy.lung.dau.vet.podcast',
          publishedAt: '2024-04-04T13:39:27.775014Z',
          thumbnails: {
            default: {
              url: 'https://yt3.ggpht.com/U5p7B5XlCYkW9oRJ3rbfheANMhbC2W5JiQWnyTsGZ5aEbAYnUcCIGgw3xNLLxGVt6KY423D65Hw=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
              height: 88,
            },
            medium: {
              url: 'https://yt3.ggpht.com/U5p7B5XlCYkW9oRJ3rbfheANMhbC2W5JiQWnyTsGZ5aEbAYnUcCIGgw3xNLLxGVt6KY423D65Hw=s240-c-k-c0x00ffffff-no-rj',
              width: 240,
              height: 240,
            },
            high: {
              url: 'https://yt3.ggpht.com/U5p7B5XlCYkW9oRJ3rbfheANMhbC2W5JiQWnyTsGZ5aEbAYnUcCIGgw3xNLLxGVt6KY423D65Hw=s800-c-k-c0x00ffffff-no-rj',
              width: 800,
              height: 800,
            },
          },
          localized: {
            title: 'Podcast Truy Lùng Dấu Vết',
            description:
              'Kênh Youtube của podcast Truy Lùng Dấu Vết.\n\n_____\n\nTội Ác. Điều tra. Con người. Câu chuyện. Một true crime podcast về những vụ án có thật cùng quá trình truy tìm thủ phạm của chúng; xâu chuỗi lại từ các bài báo, hồ sơ toà án, lời người trong cuộc, v.v.\n\nTần suất: 2~3 tuần một tập, nếu tôi không lươ- … uhm … bận.\n\n',
          },
        },
      },
      {
        kind: 'youtube#channel',
        etag: 'xLc8GMIFsbm-iokNJTfRv1LD7ho',
        id: 'UCw0YZ5HG7zOJsV3ZMRZZwvA',
        snippet: {
          title: 'Vui Vẻ',
          description:
            'Mọi thứ cũng đơn giản thôi\n------------------------------------------------------------------------------------------------------\n🔥HỢP TÁC MỜI LIÊN HỆ: \nMobile: Mr. Nguyễn Văn Linh \nZalo (nhanh nhất) và SĐT: 0363948598\nEmail: work.thereviewer@gmail.com\nFor Chinese Buisness:contactvuive@163.com\n\n',
          customUrl: 'vuive',
          publishedAt: '2021-10-04T04:22:39.862384Z',
          thumbnails: {
            default: {
              url: 'https://yt3.ggpht.com/E-eRaPqZj_a9e6xAFSLtSgUcwQ4S4l4RZ5ZwZOi7ebe9DU2abfbGBAH675BamkpNFFSo1z3Xqw=s88-c-k-c0x00ffffff-no-rj',
              width: 88,
              height: 88,
            },
            medium: {
              url: 'https://yt3.ggpht.com/E-eRaPqZj_a9e6xAFSLtSgUcwQ4S4l4RZ5ZwZOi7ebe9DU2abfbGBAH675BamkpNFFSo1z3Xqw=s240-c-k-c0x00ffffff-no-rj',
              width: 240,
              height: 240,
            },
            high: {
              url: 'https://yt3.ggpht.com/E-eRaPqZj_a9e6xAFSLtSgUcwQ4S4l4RZ5ZwZOi7ebe9DU2abfbGBAH675BamkpNFFSo1z3Xqw=s800-c-k-c0x00ffffff-no-rj',
              width: 800,
              height: 800,
            },
          },
          localized: {
            title: 'Vui Vẻ',
            description:
              'Mọi thứ cũng đơn giản thôi\n------------------------------------------------------------------------------------------------------\n🔥HỢP TÁC MỜI LIÊN HỆ: \nMobile: Mr. Nguyễn Văn Linh \nZalo (nhanh nhất) và SĐT: 0363948598\nEmail: work.thereviewer@gmail.com\nFor Chinese Buisness:contactvuive@163.com\n\n',
          },
          country: 'VN',
        },
      },
    ],
  }

  const response = await youtubeService.channels.list({
    part: 'snippet',
    id: 'UC2JzylaIF8qeowc7-5VwwmA', // Set the number of videos you want to retrieve
  })

  console.log(response.data.items)
}

export default getChannelPhoto
