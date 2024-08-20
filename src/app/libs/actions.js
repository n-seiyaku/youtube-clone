'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import youtubeService from '@/api/apiConfig'

const handleSubmit = async (formData) => {
  const searchQuery = formData.get('search-query')
  // const response = await youtubeService.search.list({
  //   part: 'snippet',
  //   maxResults: 20, // Set the number of videos you want to retrieve
  //   q: searchQuery,
  // })

  console.log(searchQuery)
  if (!searchQuery || searchQuery.trim() === '') {
    return
  }

  // const searchResults = response.data.items

  redirect('/results?search_query=' + encodeURIComponent(searchQuery))
}

export { handleSubmit }
