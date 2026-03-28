export const variants = {
  'JS-CSS':  () => import('./react/Select.jsx?raw'),
  'JS-TW':   () => import('./react/Select.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Select.tsx?raw'),
  'TS-TW':   () => import('./react/Select.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/select.blade.php?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': null,
}

export { info } from './info'
