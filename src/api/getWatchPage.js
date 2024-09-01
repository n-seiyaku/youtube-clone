import checkIsSubcribe from '@/api/checkIsSubcribe'
import formatView from '@/app/utils/formatView'
import getChannelPhotosAndCustomUrls from '@/api/getChannelPhotosAndCustomUrls'
import getSubcriberCount from '@/api/getSubcriberCount'
import getUserRatingType from '@/api/getUserRatingType'
import getVideoInfo from '@/api/getVideoInfo'

const getWatchPage = async (videoId) => {
  // const videoInfo = await getVideoInfo(videoId)

  // const [{ channelPhotos, customUrls }, subscriberCount, isSubcribe, ratingType] = await Promise.all([
  //   getChannelPhotosAndCustomUrls(videoInfo.channelId),
  //   getSubcriberCount(videoInfo.channelId),
  //   checkIsSubcribe(videoInfo.channelId),
  //   getUserRatingType(videoId),
  // ])

  // const watchPageData = {
  //   ...videoInfo,
  //   channelPhoto: channelPhotos[videoInfo.channelId],
  //   customUrl: customUrls[videoInfo.channelId],
  //   subscriberCount: formatView(subscriberCount),
  //   isSubcribe,
  //   ratingType,
  //   videoId,
  // }

  const isSubcribe = await checkIsSubcribe('UCOvu_XgzASRa0ntQhTFA0rg')
  const ratingType = await getUserRatingType(videoId)

  // SeaBflgOosY: like
  // tzbLDH7Wa5o: none
  // UByz2ENdywY: dislike

  return {
    channelId: 'UCOvu_XgzASRa0ntQhTFA0rg',
    videoId,
    title: 'YASSUO - Từ BEST Yasuo Thành Con Nghiện ĐỎ ĐEN',
    channelName: 'Game Cực Hay',
    viewCount: '299312',
    likeCount: '8K',
    publishedAt: '2024-08-13T10:27:35Z',
    description:
      'YASSUO - Từ BEST Yasuo Thành Con Nghiện ĐỎ ĐEN\n------------------------------------------------------\nĐăng ký thành viên để xem video độc quyền và nhiều quyền lợi khác tại đây: \nhttps://www.youtube.com/channel/UCOvu_XgzASRa0ntQhTFA0rg/join\n------------------------------------------------------\nScript: MinhHD\nVoice: Ming Ming\nEditor: Shaw\n------------------------------------------------------\nFanpage: https://www.facebook.com/gamecuchayvn/\nGroup: https://www.facebook.com/groups/gamecuchay/\nDiscord: https://discord.gg/qjD6RCTKyA\n\n#gamecuchay #bocphot',
    commentCount: '364',
    channelPhoto:
      'https://yt3.ggpht.com/rJXoQ0wJH2ZF7K2iWjTTsTLAWhL2yZwJ0XHZfUfCQDPyCEJy06o77_Se_g9Y_T6Ju-TWXbid=s240-c-k-c0x00ffffff-no-rj',
    customUrl: '@gamecuchay',
    subscriberCount: '519K',
    isSubcribe,
    ratingType,
  }

  return watchPageData
}

export default getWatchPage
