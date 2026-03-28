export const variants = {
  'JS-CSS':        () => import('./react/Breadcrumb.jsx?raw'),
  'JS-TW':         () => import('./react/Breadcrumb.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Breadcrumb.tsx?raw'),
  'TS-TW':         () => import('./react/Breadcrumb.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/breadcrumb.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Breadcrumb.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Breadcrumb.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
