export const variants = {
  'JS-CSS':  () => import('./react/Textarea.jsx?raw'),
  'JS-TW':   () => import('./react/Textarea.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Textarea.tsx?raw'),
  'TS-TW':   () => import('./react/Textarea.tw.tsx?raw'),
  'HTML-TW':       () => import('./laravel/textarea.blade.php?raw'),
  'RN-TW':         () => import('./react-native/Textarea.tw.tsx?raw'),
  'RN-StyleSheet': () => import('./react-native/Textarea.stylesheet.tsx?raw'),
}

export const platforms = {
  react:          ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
  laravel:        ['HTML-TW'],
  'react-native': ['RN-TW', 'RN-StyleSheet'],
}

export { info } from './info'
