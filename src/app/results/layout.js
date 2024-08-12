import SideNav from '../ui/sidenav'

const Layout = ({ children }) => {
  return (
    <>
      <div className="flex-none w-60">
        <SideNav />
      </div>
      <div className="w-full pt-6 bg-test">
        <section className="flex flex-wrap">{children}</section>
      </div>
    </>
  )
}

export default Layout
