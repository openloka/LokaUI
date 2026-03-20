export const variants = {
  'JS-CSS':  () => import('./react/Input.jsx?raw'),
  'JS-TW':   () => import('./react/Input.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Input.tsx?raw'),
  'TS-TW':   () => import('./react/Input.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
