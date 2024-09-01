import { Microphone, ThreeBars, YoutubeLogo } from '@/app/ui/icons'

import NavBarLoginButton from '@/app/ui/components/NavBar/NavBarLoginButton'
import NavBarSearchForm from '@/app/ui/components/NavBar/NavBarSearchForm'
import { ProgressBarLink } from '@/app/ui/components/ProgressBar'

const NavBar = async () => {
  return (
    <div className="flex justify-between w-full px-4 h-14 text-logo">
      <div className="flex items-center">
        <div className="mr-4 rounded-full hover:cursor-pointer hover:bg-secondary">
          <button className="p-2">
            <ThreeBars />
          </button>
        </div>
        <ProgressBarLink href="/" className="w-[5.625rem] ">
          <YoutubeLogo />
        </ProgressBarLink>
      </div>
      <div className="flex items-center">
        <NavBarSearchForm />
        <div className="flex items-center justify-center w-10 h-10 ml-3 rounded-full bg-tertiary hover:bg-secondary">
          <button className="p-2">
            <Microphone />
          </button>
        </div>
      </div>
      <div className="relative flex items-center">
        <NavBarLoginButton />
      </div>
    </div>
  )
}

export default NavBar
