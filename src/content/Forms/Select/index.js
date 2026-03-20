export const variants = {
  'JS-CSS':  () => import('./react/Select.jsx?raw'),
  'JS-TW':   () => import('./react/Select.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Select.tsx?raw'),
  'TS-TW':   () => import('./react/Select.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
