import { readFileSync } from 'fs'

const readFile = (absolutePath) => {
  try {
    const text = readFileSync(absolutePath, 'utf8')
    return text
  } catch (error) {
    console.log('File not found!')
    return Response.json({ error: error })
  }
}

export default readFile
