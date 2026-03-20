export const variants = {
  'JS-CSS':  () => import('./react/Sidebar.jsx?raw'),
  'JS-TW':   () => import('./react/Sidebar.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/Sidebar.tsx?raw'),
  'TS-TW':   () => import('./react/Sidebar.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
