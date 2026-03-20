export const variants = {
  'JS-CSS':  () => import('./react/Drawer.jsx?raw'),
  'JS-TW':   () => import('./react/Drawer.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Drawer.tsx?raw'),
  'TS-TW':   () => import('./react/Drawer.tw.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        null,
  'react-native': null,
}

export { info } from './info'
