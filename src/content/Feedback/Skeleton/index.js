export const variants = {
  'JS-CSS':  () => import('./react/Skeleton.jsx?raw'),
  'JS-TW':   () => import('./react/Skeleton.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Skeleton.tsx?raw'),
  'TS-TW':   () => import('./react/Skeleton.tw.tsx?raw'),
  'HTML-TW': () => import('./laravel/skeleton.blade.php?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': null,
}

export { info } from './info'
