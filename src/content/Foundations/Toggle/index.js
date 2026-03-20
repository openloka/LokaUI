export const variants = {
  'JS-CSS':  () => import('./react/Toggle.jsx?raw'),
  'JS-TW':   () => import('./react/Toggle.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Toggle.tsx?raw'),
  'TS-TW':   () => import('./react/Toggle.tw.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        null,
  'react-native': null,
}

export { info } from './info'
