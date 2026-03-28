export const variants = {
  'JS-CSS':  () => import('./react/Tabs.jsx?raw'),
  'JS-TW':   () => import('./react/Tabs.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Tabs.tsx?raw'),
  'TS-TW':   () => import('./react/Tabs.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/tabs.blade.php?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': null,
}

export { info } from './info'
