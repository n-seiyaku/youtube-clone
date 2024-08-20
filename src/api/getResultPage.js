import getHomePage from './getHomePage'

const getResultPage = async () => {
  const resultPage = await getHomePage()
  return resultPage
}

export default getResultPage
