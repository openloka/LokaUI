export const variants = {
  'JS-CSS':  () => import('./react/Dialog.jsx?raw'),
  'JS-TW':   () => import('./react/Dialog.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Dialog.tsx?raw'),
  'TS-TW':   () => import('./react/Dialog.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/dialog.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Dialog.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Dialog.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
