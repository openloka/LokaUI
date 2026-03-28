export const variants = {
  'JS-CSS':  () => import('./react/Tooltip.jsx?raw'),
  'JS-TW':   () => import('./react/Tooltip.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Tooltip.tsx?raw'),
  'TS-TW':   () => import('./react/Tooltip.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/tooltip.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Tooltip.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Tooltip.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
