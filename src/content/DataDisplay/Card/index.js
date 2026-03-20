export const variants = {
  'JS-CSS':  () => import('./react/Card.jsx?raw'),
  'JS-TW':   () => import('./react/Card.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Card.tsx?raw'),
  'TS-TW':   () => import('./react/Card.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
