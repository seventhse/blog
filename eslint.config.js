import config from '@blog/eslint-config'

export default config({
  ignores: [
    'apps/*',
    'packages/*',
    '!packages/eslint-config/',
    '!packages/tsconfig/',
    '!packages/tailwind-config/',
  ],
})
