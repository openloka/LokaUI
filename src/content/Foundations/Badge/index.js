export const variants = {
  'JS-CSS':        () => import('./react/Badge.jsx?raw'),
  'JS-TW':         () => import('./react/Badge.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Badge.tsx?raw'),
  'TS-TW':         () => import('./react/Badge.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/badge.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Badge.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Badge.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
