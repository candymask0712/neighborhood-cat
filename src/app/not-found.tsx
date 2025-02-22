import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="h-[calc(100vh-8rem)] flex flex-col items-center justify-center px-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">
        페이지를 찾을 수 없습니다
      </h2>
      <p className="text-md text-gray-600 mb-8">
        아래 버튼을 눌러 홈으로 돌아가주세요
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 hover:bg-blue-700 text-white rounded-md transition-colors duration-300 shadow-md focus:outline-none focus:ring-2"
      >
        홈으로 돌아가기
      </Link>
    </main>
  )
}
