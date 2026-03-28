export const variants = {
  'JS-CSS':  () => import('./react/Popover.jsx?raw'),
  'JS-TW':   () => import('./react/Popover.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Popover.tsx?raw'),
  'TS-TW':   () => import('./react/Popover.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/popover.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Popover.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Popover.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
