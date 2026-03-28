export const variants = {
  'JS-CSS':        () => import('./react/Input.jsx?raw'),
  'JS-TW':         () => import('./react/Input.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Input.tsx?raw'),
  'TS-TW':         () => import('./react/Input.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/input.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Input.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Input.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
