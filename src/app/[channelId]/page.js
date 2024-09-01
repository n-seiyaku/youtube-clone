import SideNav from '@/app/ui/components/SideNav/SideNav'
import getChannelVideo from '@/api/getChannelVideo'

const Page = async () => {
  const data = await getChannelVideo('s')
  console.log(data)
  return (
    <>
      <div className="flex-none w-60">
        <SideNav />
      </div>
      <div className="w-full pt-6">
        <main className="flex flex-wrap">
          <div>anime</div>
        </main>
      </div>
    </>
  )
}

export default Page
