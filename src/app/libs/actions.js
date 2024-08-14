'use server'

import { redirect } from 'next/navigation'
import youtubeService from '@/api/apiConfig'

const handleSubmit = async (formData) => {
  const searchQuery = formData.get('search-query')
  // const response = await youtubeService.search.list({
  //   part: 'snippet',
  //   maxResults: 20, // Set the number of videos you want to retrieve
  //   q: searchQuery,
  // })

  // const searchResults = response.data.items

  redirect('/results?search_query=' + searchQuery)
}

export { handleSubmit }
