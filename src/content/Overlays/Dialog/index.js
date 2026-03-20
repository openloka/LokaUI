export const variants = {
  'JS-CSS':  () => import('./react/Dialog.jsx?raw'),
  'JS-TW':   () => import('./react/Dialog.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Dialog.tsx?raw'),
  'TS-TW':   () => import('./react/Dialog.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
