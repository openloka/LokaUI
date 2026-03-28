export const variants = {
  'JS-CSS':        () => import('./react/Sidebar.jsx?raw'),
  'JS-TW':         () => import('./react/Sidebar.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Sidebar.tsx?raw'),
  'TS-TW':         () => import('./react/Sidebar.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/sidebar.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Sidebar.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Sidebar.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
