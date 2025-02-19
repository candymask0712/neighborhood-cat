import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended', 'prettier'],
    ignorePatterns: [
      ".next",
      "node_modules",
      "dist",
      "coverage",
      "build",
      "public",
      "**/*.config.*",
      "**/vitest.*",
      "**/postcss.config.*",
      "**/tailwind.config.*",
      "**/next.config.*",
      "__tests__"
    ],
  }),
]

export default eslintConfig