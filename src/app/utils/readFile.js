import { readFileSync } from 'fs'

const readFile = (absolutePath) => {
  try {
    const text = readFileSync(absolutePath, 'utf8')
    return text
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('File not found!')
      return error.code
    } else {
      throw error
    }
  }
}

export default readFile
