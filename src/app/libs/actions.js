'use server'

import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import youtubeService from '@/api/apiConfig'

export const handleSubmit = async (searchQuery) => {
  const response = await youtubeService.search.list({
    part: 'snippet',
    maxResults: 20, // Set the number of videos you want to retrieve
    q: searchQuery,
  })

  console.log(response.data.items[0])
  // const searchResults = response.data.items
  redirect('/results?search_query=' + searchQuery)
}
