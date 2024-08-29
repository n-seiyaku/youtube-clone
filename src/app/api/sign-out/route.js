import fs from 'fs'
import getAbsolutePathInAppFolder from '@/app/utils/getAbsolutePathInAppFolder'

export async function GET() {
  const filePath = getAbsolutePathInAppFolder(process.env.CREDENTIAL_FILE_NAME)

  fs.unlink(filePath, (err) => {
    console.log('err', err)
  })

  return Response.json({ message: 'Logout successfully!' }, { status: 200 })
}
