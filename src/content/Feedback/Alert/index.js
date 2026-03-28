export const variants = {
  'JS-CSS':  () => import('./react/Alert.jsx?raw'),
  'JS-TW':   () => import('./react/Alert.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Alert.tsx?raw'),
  'TS-TW':   () => import('./react/Alert.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/alert.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Alert.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Alert.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
