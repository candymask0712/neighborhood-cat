import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next'],
    rules: {
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
    },
  }),
  {
    ignores: [
      '.next', // Next.js 빌드 파일
      'node_modules', // 설치된 패키지
      'dist', // 번들된 빌드 폴더
      'coverage', // 테스트 커버리지 폴더
    ],
  },
]

export default eslintConfig