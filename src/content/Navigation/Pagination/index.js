export const variants = {
  'JS-CSS':  () => import('./react/Pagination.jsx?raw'),
  'JS-TW':   () => import('./react/Pagination.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Pagination.tsx?raw'),
  'TS-TW':   () => import('./react/Pagination.tw.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        null,
  'react-native': null,
}

export { info } from './info'
