import './globals.css'

import { FaBars, FaYoutube } from 'react-icons/fa6'
import { PiDotsThreeVerticalBold, PiMicrophoneFill } from 'react-icons/pi'

import { FiSearch } from 'react-icons/fi'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import NavBar from './ui/navbar'
import { SideNav } from './ui/sidenav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <div className="flex">
          <div className="flex-none w-60">
            <SideNav />
          </div>
          <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
      </body>
    </html>
  )
}
