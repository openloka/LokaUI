export const variants = {
  'JS-CSS':  () => import('./react/Popover.jsx?raw'),
  'JS-TW':   () => import('./react/Popover.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Popover.tsx?raw'),
  'TS-TW':   () => import('./react/Popover.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/popover.blade.php?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': null,
}

export { info } from './info'
