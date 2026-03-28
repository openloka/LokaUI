export const variants = {
  'JS-CSS':  () => import('./react/Radio.jsx?raw'),
  'JS-TW':   () => import('./react/Radio.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Radio.tsx?raw'),
  'TS-TW':   () => import('./react/Radio.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/radio.blade.php?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': null,
}

export { info } from './info'
