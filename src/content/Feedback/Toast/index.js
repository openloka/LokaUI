export const variants = {
  'JS-CSS':  () => import('./react/Toast.jsx?raw'),
  'JS-TW':   () => import('./react/Toast.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Toast.tsx?raw'),
  'TS-TW':   () => import('./react/Toast.tw.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        null,
  'react-native': null,
}

export { info } from './info'
