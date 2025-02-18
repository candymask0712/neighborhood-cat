'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cloneElement, ReactElement } from 'react'
import { NavType } from '@/types/navType'

interface Props extends NavType {
  icon: ReactElement
  alt: string
}

export default function NavMenu({ href, label, icon, alt }: Props) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className="flex flex-col items-center gap-2">
      <Link
        href={href}
        className={`group flex flex-col items-center transition-all duration-300 ${
          isActive ? 'text-black' : 'text-gray-500 hover:text-black'
        }`}
      >
        <div className="w-10 h-10 flex flex-col items-center gap-1">
          {cloneElement(icon, {
            className: `w-6 h-6 transition-all duration-300 ${
              isActive
                ? 'fill-black scale-110'
                : 'fill-none stroke-gray-500 group-hover:fill-gray-300 group-hover:stroke-black group-hover:scale-110'
            }`,
            alt,
          })}
          <span
            className={`text-xs transition-all duration-300 ${
              isActive
                ? 'font-bold text-black scale-105'
                : 'text-gray-500 group-hover:text-black group-hover:scale-105'
            }`}
          >
            {label}
          </span>
        </div>
      </Link>
    </li>
  )
}
