export const variants = {
  'JS-CSS':        () => import('./react/Toggle.jsx?raw'),
  'JS-TW':         () => import('./react/Toggle.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Toggle.tsx?raw'),
  'TS-TW':         () => import('./react/Toggle.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/toggle.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Toggle.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Toggle.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
