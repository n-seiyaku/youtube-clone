import ResultItem from '../ui/components/ResultPage/ResultItem'
import getResultPage from '@/api/getResultPage'

const Page = async () => {
  const response = await getResultPage()
  const resultPageData = response.data

  return (
    <div className="w-full px-6">
      {resultPageData.map((item) => (
        <ResultItem key={item.videoId} data={item} />
      ))}
    </div>
  )
}

export default Page
