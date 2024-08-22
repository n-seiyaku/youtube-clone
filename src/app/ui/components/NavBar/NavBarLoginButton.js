'use client'

import { NotificationOutlined, SignOut, ThreeDots, UserIcon } from '../../icons'
import { ProgressBarLink, useProgressBar } from '../ProgressBar'
import { startTransition, useContext, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { AuthContext } from '@/app/AuthProvider'
import Image from 'next/image'
import clsx from 'clsx'

const NavBarLoginButton = () => {
  const { authData, setAuthData, isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const menuRef = useRef(null)
  const buttonRef = useRef(null)
  const progress = useProgressBar()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const oauthSignIn = () => {
    var oauth2Endpoint = 'https://accounts.google.com/o/oauth2/v2/auth'

    var form = document.createElement('form')
    form.setAttribute('method', 'GET')
    form.setAttribute('action', oauth2Endpoint)

    var params = {
      client_id: '943852022379-6ch51idrdt6t6uu0g02a6qvl86lt6kul.apps.googleusercontent.com',
      redirect_uri: 'http://localhost:3000/login',
      response_type: 'token',
      scope: 'https://www.googleapis.com/auth/youtube',
      include_granted_scopes: 'true',
      state: 'pass-through value',
    }

    for (var p in params) {
      var input = document.createElement('input')
      input.setAttribute('type', 'hidden')
      input.setAttribute('name', p)
      input.setAttribute('value', params[p])
      form.appendChild(input)
    }

    document.body.appendChild(form)
    form.submit()
  }

  const signOut = () => {
    const currentPath = `${pathname}?${searchParams.toString()}`
    setIsAuthenticated(false)
    setAuthData({})
    localStorage.clear()

    progress.start()
    startTransition(() => {
      router.push(currentPath)
      progress.done()
    })
  }

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target) && event.target !== buttonRef.current) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return isAuthenticated ? (
    <>
      <div className="w-10 h-10 mr-2 rounded-full hover:cursor-pointer hover:bg-tertiary">
        <div className="p-2">
          <NotificationOutlined />
        </div>
      </div>
      <div className="px-[0.375rem] relative" ref={buttonRef} onClick={toggleMenu}>
        <Image
          className="mx-2 rounded-full cursor-pointer"
          src={authData?.thumbnails?.high?.url}
          alt={authData?.title}
          width={32}
          height={32}
        />
        <div
          ref={menuRef}
          className={clsx('absolute top-0 w-[18.75rem] bg-sub-menu right-[60px] rounded-xl', !isMenuOpen && 'hidden')}
        >
          <div className="flex p-4">
            <div className="mr-4">
              <Image
                className="rounded-full"
                src={authData?.thumbnails?.high?.url}
                alt={authData?.title}
                width={40}
                height={40}
              />
            </div>
            <div>
              <div className="text-base font-normal leading-[1.375rem]">{authData?.title}</div>
              <div className="text-base font-normal leading-[1.375rem]">{authData?.customUrl}</div>
              <div className="mt-2 text-sm font-normal">
                <ProgressBarLink href={`/${authData?.customUrl}`}>View your channel</ProgressBarLink>
              </div>
            </div>
          </div>
          <div
            className="flex items-center pt-4 pb-4 pl-4 cursor-pointer hover:bg-secondary rounded-b-xl"
            onClick={signOut}
          >
            <div className="mr-4">
              <SignOut />
            </div>
            <div>Sign out</div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="flex items-center w-10 h-10 ml-3 mr-2 rounded-full hover:bg-secondary">
        <button className="p-2">
          <ThreeDots />
        </button>
      </div>
      <div
        onClick={oauthSignIn}
        className="flex justify-center items-center h-9 rounded-[1.25rem] border border-secondary hover:bg-[#263850]"
      >
        <button className="flex items-center px-3 text-btn-blue">
          <div className="mr-[0.375rem]">
            <UserIcon />
          </div>
          <div className="text-sm">Đăng nhập</div>
        </button>
      </div>
    </>
  )
}

export default NavBarLoginButton
