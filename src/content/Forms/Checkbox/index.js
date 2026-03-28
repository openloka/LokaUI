export const variants = {
  'JS-CSS':  () => import('./react/Checkbox.jsx?raw'),
  'JS-TW':   () => import('./react/Checkbox.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Checkbox.tsx?raw'),
  'TS-TW':   () => import('./react/Checkbox.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/checkbox.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Checkbox.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Checkbox.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
