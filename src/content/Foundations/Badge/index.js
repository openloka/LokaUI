export const variants = {
  'JS-CSS':  () => import('./react/Badge.jsx?raw'),
  'JS-TW':   () => import('./react/Badge.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Badge.tsx?raw'),
  'TS-TW':   () => import('./react/Badge.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
