export const variants = {
  'JS-CSS':        () => import('./react/Skeleton.jsx?raw'),
  'JS-TW':         () => import('./react/Skeleton.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Skeleton.tsx?raw'),
  'TS-TW':         () => import('./react/Skeleton.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/skeleton.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Skeleton.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Skeleton.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
