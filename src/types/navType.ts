import { MENUS } from '@/constants/nav'

export type MenuKey = keyof typeof MENUS
export type MenuType = typeof MENUS
export type MenuItemType = MenuType[MenuKey]

export interface NavType {
  href: MenuItemType['href']
  label: MenuItemType['label']
}
