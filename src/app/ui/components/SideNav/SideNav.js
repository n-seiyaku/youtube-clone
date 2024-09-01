'use client'

import {
  HistoryFilled,
  HistoryOutlined,
  HomeFilled,
  HomeOutlined,
  ShortsFilled,
  ShortsOutlined,
  SubscriptionsFilled,
  SubscriptionsOutlined,
  YouFilled,
  YouOutlined,
} from '@/app/ui/icons'

import { ProgressBarLink } from '@/app/ui/components/ProgressBar'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'

const list1 = [
  {
    label: 'Home',
    href: '/',
    icons: {
      filled: <HomeFilled />,
      outline: <HomeOutlined />,
    },
  },
  {
    label: 'Shorts',
    href: '/feed/shorts',
    icons: {
      filled: <ShortsFilled />,
      outline: <ShortsOutlined />,
    },
  },
  {
    label: 'Subscriptions',
    href: '/feed/subscriptions',
    icons: {
      filled: <SubscriptionsFilled />,
      outline: <SubscriptionsOutlined />,
    },
  },
]

const list2 = [
  {
    label: 'You',
    href: '/@you',
    icons: {
      filled: <YouFilled />,
      outline: <YouOutlined />,
    },
  },
  {
    label: 'History',
    href: '/feed/history',
    icons: {
      filled: <HistoryFilled />,
      outline: <HistoryOutlined />,
    },
  },
]

const SideNav = () => {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col w-60 text-[0.875rem] text-logo">
      <div className="p-3 after:content-[''] after:block after:w-full after:h-[1px] after:bg-secondary after:mt-3">
        {list1.map((item, index) => (
          <ProgressBarLink
            href={item.href}
            key={index}
            className={clsx(
              'flex items-center h-10 px-3 w-[12.75rem] rounded-[0.625rem]',
              {
                'font-medium bg-tertiary hover:bg-secondary': pathname === item.href,
              },
              {
                'hover:bg-tertiary': pathname !== item.href,
              }
            )}
          >
            <div className="mr-6">{pathname === item.href ? item.icons.filled : item.icons.outline}</div>
            <div className="pt-[1px]">{item.label}</div>
          </ProgressBarLink>
        ))}
      </div>
      <div className="px-3 pb-3 after:content-[''] after:block after:w-full after:h-[1px] after:bg-secondary after:mt-3">
        {list2.map((item, index) => (
          <ProgressBarLink
            href={item.href}
            key={index}
            className={clsx(
              'flex items-center h-10 px-3 w-[12.75rem] rounded-[0.625rem]',
              {
                'font-medium bg-tertiary hover:bg-secondary': pathname === item.href,
              },
              {
                'hover:bg-tertiary': pathname !== item.href,
              }
            )}
          >
            <div className="mr-6">{pathname === item.href ? item.icons.filled : item.icons.outline}</div>
            <div className="pt-[1px]">{item.label}</div>
          </ProgressBarLink>
        ))}
      </div>
    </nav>
  )
}

export default SideNav
