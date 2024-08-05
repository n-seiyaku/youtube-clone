'use server'

import { FaBars, FaYoutube } from 'react-icons/fa6'
import { PiDotsThreeVerticalBold, PiMicrophoneFill } from 'react-icons/pi'
import { Microphone, ThreeBars, ThreeDots, UserIcon, YoutubeLogo } from './icons'

import Link from 'next/link'
import SearchForm from '@/app/ui/results/SearchForm'
import { SideNav } from '@/app/ui/sidenav'

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
        <SearchForm />
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
        <div className="flex justify-center items-center w-[7rem] h-10 rounded-[1.25rem] border border-secondary hover:bg-[#263850]">
          <Link href="/" className="flex p-2">
            <i>
              <UserIcon />
            </i>
            <span>Đăng nhập</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
