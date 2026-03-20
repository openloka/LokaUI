export const variants = {
  'JS-CSS':  () => import('./react/Popover.jsx?raw'),
  'JS-TW':   () => import('./react/Popover.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Popover.tsx?raw'),
  'TS-TW':   () => import('./react/Popover.tw.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        null,
  'react-native': null,
}

export { info } from './info'
