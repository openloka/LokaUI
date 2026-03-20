export const variants = {
  'JS-CSS':  () => import('./react/Spinner.jsx?raw'),
  'JS-TW':   () => import('./react/Spinner.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Spinner.tsx?raw'),
  'TS-TW':   () => import('./react/Spinner.tw.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        null,
  'react-native': null,
}

export { info } from './info'
