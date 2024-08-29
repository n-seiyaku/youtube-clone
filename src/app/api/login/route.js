import { NextResponse } from 'next/server'
import getAbsolutePathInAppFolder from '@/app/utils/getAbsolutePathInAppFolder'
import { google } from 'googleapis'
import { redirect } from 'next/navigation'
import { writeFileSync } from 'fs'

export const oauth2Client = new google.auth.OAuth2(
  process.env.YOUTUBE_CLIENT_ID,
  process.env.YOUTUBE_CLIENT_SECRET,
  process.env.LOGIN_URL
)

const scopes = 'https://www.googleapis.com/auth/youtube'
export const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: scopes,
})

export async function GET() {
  redirect(authorizationUrl)
}

export async function POST(request) {
  try {
    const { code, scope } = await request.json()
    let tokens = undefined
    await oauth2Client
      .getToken(code)
      .then((res) => (tokens = res.tokens))
      .catch((err) => {
        throw new Error(err.message)
      })

    oauth2Client.setCredentials(tokens)
    const authToken = generateToken()

    const filePath = getAbsolutePathInAppFolder('tokens.json')
    writeFileSync(
      filePath,
      JSON.stringify({
        sub: authToken,
        tokens,
      })
    )

    const response = NextResponse.json({ message: 'Cookie đã được thiết lập' })

    response.cookies.set('sub', authToken, {
      path: '/',
    })

    return response
  } catch (err) {
    switch (err.message) {
      case 'invalid_grant':
        console.log('Error invalid_grant from gg auth')
        break

      default:
        console.log(err)
        break
    }
    return NextResponse.json({ message: 'lỗi' })
  }
}

const rand = () => {
  return Math.random().toString(36).substring(2) // remove `0.`
}

const generateToken = () => {
  return rand() + rand() + rand() + '-' + rand() + rand() + rand() // to make it longer
}
