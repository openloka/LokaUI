export const variants = {
  'JS-CSS':  () => import('./react/Radio.jsx?raw'),
  'JS-TW':   () => import('./react/Radio.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Radio.tsx?raw'),
  'TS-TW':   () => import('./react/Radio.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/radio.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Radio.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Radio.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
