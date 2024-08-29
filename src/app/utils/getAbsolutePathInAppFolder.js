import path from 'path'

const getAbsolutePathInAppFolder = (fileName) => {
  const relativePath = path.join('src', 'app', fileName)
  const absolutePath = path.join(process.cwd(), relativePath)

  return absolutePath
}

export default getAbsolutePathInAppFolder
