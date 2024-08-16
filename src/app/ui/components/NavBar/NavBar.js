'use server'

import { Microphone, ThreeBars, ThreeDots, UserIcon, YoutubeLogo } from '../../icons'

import Link from 'next/link'
import NavBarSearchForm from '@/app/ui/components/NavBar/NavBarSearchForm'
import NavBarSearchInput from './NavBarSearchInput'

const NavBar = async () => {
  return (
    <div className="flex justify-between w-full px-4 h-14 text-logo">
      <div className="flex items-center">
        <div className="mr-4 rounded-full hover:cursor-pointer hover:bg-secondary">
          <button className="p-2">
            <ThreeBars />
          </button>
        </div>
        <Link href="/" className="w-[5.625rem] ">
          <YoutubeLogo />
        </Link>
      </div>
      <div className="flex items-center">
        <NavBarSearchForm>
          <NavBarSearchInput />
        </NavBarSearchForm>
        <div className="flex items-center justify-center w-10 h-10 ml-3 rounded-full bg-tertiary hover:bg-secondary">
          <button className="p-2">
            <Microphone />
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex items-center w-10 h-10 ml-3 mr-2 rounded-full hover:bg-secondary">
          <button className="p-2">
            <ThreeDots />
          </button>
        </div>
        <div className="flex justify-center items-center h-9 rounded-[1.25rem] border border-secondary hover:bg-[#263850]">
          <Link href="/" className="flex items-center px-3 text-btn-blue">
            <div className="mr-[0.375rem]">
              <UserIcon />
            </div>
            <div className="text-sm">Đăng nhập</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
