export const variants = {
  'JS-CSS':  () => import('./react/Spinner.jsx?raw'),
  'JS-TW':   () => import('./react/Spinner.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Spinner.tsx?raw'),
  'TS-TW':   () => import('./react/Spinner.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/spinner.blade.php?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': null,
}

export { info } from './info'
