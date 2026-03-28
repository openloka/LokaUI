export const variants = {
  'JS-CSS':  () => import('./react/Card.jsx?raw'),
  'JS-TW':   () => import('./react/Card.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Card.tsx?raw'),
  'TS-TW':   () => import('./react/Card.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/card.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Card.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Card.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
