export const variants = {
  'JS-CSS':  () => import('./react/Progress.jsx?raw'),
  'JS-TW':   () => import('./react/Progress.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Progress.tsx?raw'),
  'TS-TW':   () => import('./react/Progress.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/progress.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Progress.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Progress.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
