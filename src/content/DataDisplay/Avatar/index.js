export const variants = {
  'JS-CSS':  () => import('./react/Avatar.jsx?raw'),
  'JS-TW':   () => import('./react/Avatar.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Avatar.tsx?raw'),
  'TS-TW':   () => import('./react/Avatar.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/avatar.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Avatar.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Avatar.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
