export const variants = {
  'JS-CSS':  () => import('./react/Avatar.jsx?raw'),
  'JS-TW':   () => import('./react/Avatar.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Avatar.tsx?raw'),
  'TS-TW':   () => import('./react/Avatar.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
