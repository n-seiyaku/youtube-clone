'use server'

import rateVideo from '@/api/rateVideo'
import { redirect } from 'next/navigation'
import subcribeNewChannel from '@/api/subcribeNewChannel'

const handleSubmit = async (formData) => {
  const searchQuery = formData.get('search-query')
  if (!searchQuery || searchQuery.trim() === '') {
    return
  }

  redirect('/results?search_query=' + encodeURIComponent(searchQuery))
}

const handleSubcribeChannel = async (channelId) => {
  await subcribeNewChannel(channelId)
}

const handleRatingVideo = async (videoId, ratingType) => {
  await rateVideo(videoId, ratingType)
}

export { handleSubmit, handleSubcribeChannel, handleRatingVideo }
