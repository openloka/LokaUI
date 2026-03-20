export const variants = {
  'JS-CSS':  () => import('./react/Table.jsx?raw'),
  'JS-TW':   () => import('./react/Table.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Table.tsx?raw'),
  'TS-TW':   () => import('./react/Table.tw.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        null,
  'react-native': null,
}

export { info } from './info'
