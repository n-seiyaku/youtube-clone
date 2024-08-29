import { google } from 'googleapis'

const youtubeService = google.youtube({
  version: 'v3',
  auth: process.env.YOUTUBE_API_KEY,
})

export default youtubeService
