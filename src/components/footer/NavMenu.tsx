'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cloneElement, ReactElement } from 'react'
import clsx from 'clsx'
import { NavType } from '@/types/navType'

interface Props extends NavType {
  icon: ReactElement
  alt: string
}

export default function NavMenu({ href, label, icon, alt }: Props) {
  const pathname = usePathname()
  const isActive = pathname === href

  const linkClassName = clsx(
    'group flex flex-col items-center transition-all duration-300',
    isActive ? 'text-black' : 'text-gray-500 hover:text-black'
  )

  const iconClassName = clsx(
    'w-6 h-6 transition-all duration-300',
    isActive
      ? 'fill-black scale-110'
      : 'fill-none stroke-gray-500 group-hover:fill-gray-300 group-hover:stroke-black group-hover:scale-110'
  )

  const spanClassName = clsx(
    'text-xs transition-all duration-300',
    isActive
      ? 'font-bold text-black scale-105'
      : 'text-gray-500 group-hover:text-black group-hover:scale-105'
  )

  return (
    <li className="flex flex-col items-center gap-2">
      <Link href={href} className={linkClassName}>
        <div className="w-10 h-10 flex flex-col items-center gap-1">
          {cloneElement(icon, {
            className: iconClassName,
            alt,
          })}
          <span className={spanClassName}>{label}</span>
        </div>
      </Link>
    </li>
  )
}
