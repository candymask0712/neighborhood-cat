import Link from 'next/link'

import LogoImage from '@/assets/images/logo.png'
import Image from 'next/image'
import { COMMON_KEYWORDS } from '@/constants/common'

export default function Header() {
  return (
    <header className="w-full border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex gap-2">
          <Image
            src={LogoImage}
            alt="고양이 모양의 서비스 로고"
            width={40}
            height={40}
          />
          <span className="text-2xl font-bold">{COMMON_KEYWORDS.APP_NAME}</span>
        </Link>
      </div>
    </header>
  )
}
