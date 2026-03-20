export const variants = {
  'JS-CSS':  () => import('./react/Checkbox.jsx?raw'),
  'JS-TW':   () => import('./react/Checkbox.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Checkbox.tsx?raw'),
  'TS-TW':   () => import('./react/Checkbox.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
