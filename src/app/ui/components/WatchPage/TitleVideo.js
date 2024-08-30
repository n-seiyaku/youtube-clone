'use client'

import { AngleDown, DislikeFilled, DislikeOutlined, LikeFilled, LikeOutlined } from '../../icons'
import { ProgressBarLink, useProgressBar } from '../ProgressBar'
import { handleRatingVideo, handleSubcribeChannel } from '@/app/libs/actions'

import Image from 'next/image'
import { startTransition } from 'react'
import { useRouter } from 'next/navigation'

const TitleVideo = ({ watchPageData }) => {
  const progress = useProgressBar()
  const router = useRouter()

  const handleClickRatingButton = (e) => {
    e.preventDefault()
    const ratingType = watchPageData.ratingType === e.currentTarget.name ? 'none' : e.currentTarget.name
    progress.start()
    console.log('start')
    handleRatingVideo(watchPageData.videoId, ratingType)

    startTransition(() => {
      router.refresh()
      progress.done()
      console.log('done')
    })
  }

  return (
    <div className="mt-3">
      <div className="text-xl font-bold text-main-text">
        <span>{watchPageData.title}</span>
      </div>
      <div className="flex justify-between">
        <div className="flex mt-3">
          <ProgressBarLink href={watchPageData.customUrl}>
            <div className="mr-3">
              <Image
                className="rounded-full"
                src={watchPageData.channelPhoto}
                alt={watchPageData.channelName}
                width="40"
                height="40"
              />
            </div>
          </ProgressBarLink>
          <div className="flex flex-col mr-6 text-main-text">
            <div className="text-base font-medium leading-[1.375rem]">
              <ProgressBarLink href={watchPageData.customUrl}>{watchPageData.channelName}</ProgressBarLink>
            </div>
            <div className="text-xs font-normal text-sub-text leading-[1.125rem]">
              {watchPageData.subscriberCount} subscribers
            </div>
          </div>
          <div className="flex items-center">
            {watchPageData.isSubcribe ? (
              <button className="flex items-center px-4 h-9 text-main-text bg-tertiary rounded-[1.125rem] text-sm font-medium hover:bg-gray-hover">
                Subscribed
                <span className="ml-[0.375rem] -mr-[0.375rem]">
                  <AngleDown />
                </span>
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault()
                  progress.start()
                  handleSubcribeChannel(watchPageData.channelId)

                  startTransition(() => {
                    router.refresh()
                    progress.done()
                  })
                }}
                className="px-4 h-9 text-primary bg-main-text rounded-[1.125rem] text-sm font-medium hover:bg-white-hover"
              >
                Subscribe
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center text-sm font-medium text-logo">
          <button
            onClick={handleClickRatingButton}
            name="like"
            className="px-4 bg-like-btn rounded-l-[1.125rem] relative hover:bg-like-hover"
            title="I like this"
          >
            <div className="flex items-center h-9 after:content-[''] after:absolute after:w-[1px] after:h-[1.5rem] after:bg-like-hover after:right-[-0.5px] after:top-[0.375rem]">
              <div className="mr-[0.375rem] -ml-[0.375rem]">
                {watchPageData.ratingType === 'like' ? <LikeFilled /> : <LikeOutlined />}
              </div>
              <span>{watchPageData.likeCount}</span>
            </div>
          </button>
          <button
            onClick={handleClickRatingButton}
            name="dislike"
            className="px-4 bg-like-btn h-9 rounded-r-[1.125rem] hover:bg-like-hover"
            title="I dislike this"
          >
            <div className="flex items-center -ml-[0.375rem]">
              {watchPageData.ratingType === 'dislike' ? <DislikeFilled /> : <DislikeOutlined />}
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

export default TitleVideo
