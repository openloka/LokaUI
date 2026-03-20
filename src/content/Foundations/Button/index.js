export const variants = {
  'JS-CSS':        () => import('./react/Button.jsx?raw'),
  'JS-TW':         () => import('./react/Button.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Button.tsx?raw'),
  'TS-TW':         () => import('./react/Button.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/button.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Button.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Button.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
