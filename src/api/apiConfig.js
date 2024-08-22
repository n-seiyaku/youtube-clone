import { google } from 'googleapis'

const youtubeService = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
  // Replace with your actual API key
})

export default youtubeService
