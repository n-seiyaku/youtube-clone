import SideNav from '@/app/ui/components/SideNav/SideNav'

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex-none w-60">
        <SideNav />
      </div>
      <div className="w-full pt-2">
        <section className="flex flex-wrap">{children}</section>
      </div>
    </>
  )
}

export default Layout
