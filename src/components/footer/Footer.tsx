import LogoImage from '@/assets/images/logo.png'
import NavMenu from './NavMenu'

import { MENUS } from '@/constants/nav'
import {
  HomeIcon,
  MagnifyingGlassIcon,
  CloudArrowUpIcon,
  MapPinIcon,
  UserIcon,
} from '@heroicons/react/24/outline'
import { ReactElement } from 'react'

const iconSize = 'w-6 h-6'

const MENU_ASSETS: Record<string, { icon: ReactElement }> = {
  [MENUS.home.href]: {
    icon: <HomeIcon className={iconSize} />,
  },
  [MENUS.search.href]: {
    icon: <MagnifyingGlassIcon className={iconSize} />,
  },
  [MENUS.upload.href]: {
    icon: <CloudArrowUpIcon className={iconSize} />,
  },
  [MENUS.nearby.href]: {
    icon: <MapPinIcon className={iconSize} />,
  },
  [MENUS.mypage.href]: {
    icon: <UserIcon className={iconSize} />,
  },
}

const NAV_MENUS = Object.values(MENUS).map((menu) => ({
  ...menu,
  icon: MENU_ASSETS[menu.href]?.icon || LogoImage,
  alt: `${menu.label} 메뉴 아이콘`,
}))

export default function Footer() {
  return (
    <footer className="w-full border-t max-w-md fixed bottom-0">
      <div className="container mx-auto px-4 h-16 flex items-center justify-center">
        <nav>
          <ul className="flex items-center gap-10">
            {NAV_MENUS.map((menu) => (
              <NavMenu key={menu.href} {...menu} />
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
