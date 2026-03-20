export const variants = {
  'JS-CSS':  () => import('./react/Textarea.jsx?raw'),
  'JS-TW':   () => import('./react/Textarea.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Textarea.tsx?raw'),
  'TS-TW':   () => import('./react/Textarea.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
