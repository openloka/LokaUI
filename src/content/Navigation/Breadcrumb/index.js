export const variants = {
  'JS-CSS':  () => import('./react/Breadcrumb.jsx?raw'),
  'JS-TW':   () => import('./react/Breadcrumb.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Breadcrumb.tsx?raw'),
  'TS-TW':   () => import('./react/Breadcrumb.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/breadcrumb.blade.php?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': null,
}

export { info } from './info'
