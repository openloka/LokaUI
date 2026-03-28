export const variants = {
  'JS-CSS':  () => import('./react/Spinner.jsx?raw'),
  'JS-TW':   () => import('./react/Spinner.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Spinner.tsx?raw'),
  'TS-TW':   () => import('./react/Spinner.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/spinner.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Spinner.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Spinner.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
