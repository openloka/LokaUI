export const variants = {
  'JS-CSS':  () => import('./react/Drawer.jsx?raw'),
  'JS-TW':   () => import('./react/Drawer.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Drawer.tsx?raw'),
  'TS-TW':   () => import('./react/Drawer.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/drawer.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Drawer.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Drawer.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
