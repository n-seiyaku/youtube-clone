import getHomePage from '@/api/getHomePage'

const getResultPage = async () => {
  const resultPage = await getHomePage()
  return resultPage
}

export default getResultPage
