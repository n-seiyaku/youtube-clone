import getAbsolutePathInAppFolder from '@/app/utils/getAbsolutePathInAppFolder'
import { google } from 'googleapis'
import { oauth2Client } from '@/app/api/login/route'
import parseCookies from '@/app/utils/parseCookies'
import readFile from '@/app/utils/readFile'

const absolutePath = getAbsolutePathInAppFolder(process.env.CREDENTIAL_FILE_NAME)
const text = readFile(absolutePath)
const { sub, tokens } = JSON.parse(text)
oauth2Client.setCredentials(tokens)

export const youtubeAuthService = google.youtube({
  version: 'v3',
  auth: oauth2Client,
})

export async function GET(request) {
  const cookieHeader = request.headers.get('cookie')

  const cookies = parseCookies(cookieHeader)
  if (cookies.sub !== sub) {
    return Response.json({ message: 'Authentication failed' }, { status: 404 })
  }

  try {
    const response = await youtubeAuthService.channels.list({
      part: 'snippet',
      mine: true,
    })

    const userData = response.data.items[0]
    return Response.json({ data: userData }, { status: 200 })
  } catch (error) {
    return Response.json({ message: 'Authentication failed' }, { status: 404 })
  }
}
