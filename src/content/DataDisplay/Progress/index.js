export const variants = {
  'JS-CSS':  () => import('./react/Progress.jsx?raw'),
  'JS-TW':   () => import('./react/Progress.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Progress.tsx?raw'),
  'TS-TW':   () => import('./react/Progress.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
