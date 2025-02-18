import { Metadata } from 'next'
import './globals.css'
import { COMMON_KEYWORDS, COMMON_TEXT } from '@/constants/common'
import { Noto_Sans_KR } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/footer/Footer'

export const metadata: Metadata = {
  title: COMMON_KEYWORDS.APP_NAME,
  description: COMMON_TEXT.META.DESCRIPTION,
  keywords: COMMON_TEXT.META.KEYWORDS,
}

const notoSansKr = Noto_Sans_KR({
  // Noto_Sans_KR은 subset으로 한국어 미지원으로 false로 설정
  preload: false,
  weight: ['100', '400', '700', '900'],
})

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body className={`${notoSansKr.className} antialiased`}>
        <div className="flex justify-center bg-gray-200 min-h-screen">
          <div className="w-full max-w-md bg-white">
            <Header />
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
