export const variants = {
  'JS-CSS':        () => import('./react/Tabs.jsx?raw'),
  'JS-TW':         () => import('./react/Tabs.tw.jsx?raw'),
  'TS-CSS':        () => import('./react/Tabs.tsx?raw'),
  'TS-TW':         () => import('./react/Tabs.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/tabs.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Tabs.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Tabs.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
