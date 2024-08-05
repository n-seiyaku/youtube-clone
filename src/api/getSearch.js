import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
import youtubeService from '@/api/apiConfig'

export default async function getSearch(searchQuery = '') {
  // const response = await youtubeService.search.list({
  //   part: 'snippet',
  //   maxResults: 20, // Set the number of videos you want to retrieve
  //   q: searchQuery,
  // })

  // const searchResults = response.data.items
  revalidatePath('/results')
  redirect('/results?search_query=' + searchQuery)
  // return searchResults
}
