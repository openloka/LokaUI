export const variants = {
  'JS-CSS':  () => import('./react/Table.jsx?raw'),
  'JS-TW':   () => import('./react/Table.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Table.tsx?raw'),
  'TS-TW':   () => import('./react/Table.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/table.blade.php?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': null,
}

export { info } from './info'
