export const variants = {
  'JS-CSS':  () => import('./react/Toast.jsx?raw'),
  'JS-TW':   () => import('./react/Toast.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Toast.tsx?raw'),
  'TS-TW':   () => import('./react/Toast.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/toast.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Toast.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Toast.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
