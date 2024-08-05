import { HomeFilled, HomeOutlined } from './icons'

import { GoHomeFill } from 'react-icons/go'
import Link from 'next/link'

export const SideNav = async () => {
  const list1 = [
    { label: 'Trang chủ', href: '/', icon: <HomeFilled /> },
    { label: 'Shorts', href: '/videos' },
    { label: 'Kênh đăng ký', href: '/videos' },
  ]

  const list2 = [
    { label: 'Bạn', href: '/videos' },
    { label: 'Video đã xem', href: '/videos' },
  ]

  return (
    <nav className="flex flex-col w-60 bg-test">
      <div className="p-3">
        {list1.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="flex items-center h-10 px-3 hover:text-tertiary hover:bg-secondary"
          >
            <i className="mr-6">{item.icon}</i> <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
