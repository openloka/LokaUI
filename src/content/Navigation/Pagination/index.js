export const variants = {
  'JS-CSS':        () => import('./react/Pagination.jsx?raw'),
  'JS-TW':         () => import('./react/Pagination.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Pagination.tsx?raw'),
  'TS-TW':         () => import('./react/Pagination.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/pagination.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Pagination.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Pagination.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
