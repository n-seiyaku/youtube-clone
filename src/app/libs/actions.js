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

const likeVideo = async (videoId) => {
  await rateVideo(videoId, 'like')
}

export { handleSubmit, handleSubcribeChannel, likeVideo }
