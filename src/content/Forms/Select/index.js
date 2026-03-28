export const variants = {
  'JS-CSS':  () => import('./react/Select.jsx?raw'),
  'JS-TW':   () => import('./react/Select.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Select.tsx?raw'),
  'TS-TW':   () => import('./react/Select.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/select.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Select.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Select.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
