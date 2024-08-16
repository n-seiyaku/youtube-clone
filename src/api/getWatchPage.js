import formatView from '@/app/utils/formatView'
import getChannelPhoto from './getChannelPhoto'
import getSubcriberCount from './getSubcriberCount'
import getVideoInfo from './getVideoInfo'

const getWatchPage = async (videoId) => {
  // const videoInfo = await getVideoInfo(videoId)

  // const [channelPhoto, subscriberCount] = await Promise.all([
  //   getChannelPhoto(videoInfo.channelId),
  //   getSubcriberCount(videoInfo.channelId),
  // ])

  // const watchPageData = {
  //   ...videoInfo,
  //   channelPhoto,
  //   subscriberCount: formatView(subscriberCount),
  // }

  return {
    channelId: 'UCOvu_XgzASRa0ntQhTFA0rg',
    title: 'YASSUO - Từ BEST Yasuo Thành Con Nghiện ĐỎ ĐEN',
    channelName: 'Game Cực Hay',
    viewCount: '209609',
    likeCount: '6170',
    relativeTime: '3 days ago',
    description:
      'YASSUO - Từ BEST Yasuo Thành Con Nghiện ĐỎ ĐEN\n' +
      '------------------------------------------------------\n' +
      'Đăng ký thành viên để xem video độc quyền và nhiều quyền lợi khác tại đây: \n' +
      'https://www.youtube.com/channel/UCOvu_XgzASRa0ntQhTFA0rg/join\n' +
      '------------------------------------------------------\n' +
      'Script: MinhHD\n' +
      'Voice: Ming Ming\n' +
      'Editor: Shaw\n' +
      '------------------------------------------------------\n' +
      'Fanpage: https://www.facebook.com/gamecuchayvn/\n' +
      'Group: https://www.facebook.com/groups/gamecuchay/\n' +
      'Discord: https://discord.gg/qjD6RCTKyA\n' +
      '\n' +
      '#gamecuchay #bocphot',
    commentCount: '253',
    channelPhoto:
      'https://yt3.ggpht.com/rJXoQ0wJH2ZF7K2iWjTTsTLAWhL2yZwJ0XHZfUfCQDPyCEJy06o77_Se_g9Y_T6Ju-TWXbid=s88-c-k-c0x00ffffff-no-rj',
    subscriberCount: '518K',
  }

  return watchPageData
}

export default getWatchPage
