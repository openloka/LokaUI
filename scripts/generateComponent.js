import { writeFileSync, mkdirSync } from 'fs'

const name = process.argv[2]
const category = process.argv[3]
if (!name || !category) {
  console.error('Usage: node scripts/generateComponent.js <ComponentName> <Category>')
  process.exit(1)
}

const dir = `src/content/${category}/${name}`
mkdirSync(`${dir}/react`, { recursive: true })

writeFileSync(`${dir}/info.js`, `export const info = {
  name: '${name}',
  description: '${name} component for LokaUI.',
  category: '${category}',
  status: 'stable',
  tags: ['${name.toLowerCase()}'],
  props: [],
}
`)

writeFileSync(`${dir}/index.js`, `export const variants = {
  'JS-CSS':  () => import('./react/${name}.jsx?raw'),
  'JS-TW':   () => import('./react/${name}.tw.jsx?raw'),
  'TS-CSS':  () => import('./react/${name}.tsx?raw'),
  'TS-TW':   () => import('./react/${name}.tw.tsx?raw'),
}

export const platforms = {
  react: ['JS-CSS', 'JS-TW', 'TS-CSS', 'TS-TW'],
}

export { info } from './info'
`)

const placeholder = (ext) => {
  const isTS = ext.includes('ts')
  const isTW = ext.includes('tw')
  return `${isTS ? `interface ${name}Props {\n  children?: React.ReactNode\n}\n\n` : ''}export default function ${name}(${isTS ? `props: ${name}Props` : 'props'}) {
  return (
    <div${isTW ? ' className="p-4 rounded-lg border border-border"' : ''}>
      ${name} component
    </div>
  )
}
`
}

writeFileSync(`${dir}/react/${name}.jsx`, placeholder('jsx'))
writeFileSync(`${dir}/react/${name}.tw.jsx`, placeholder('tw.jsx'))
writeFileSync(`${dir}/react/${name}.tsx`, placeholder('tsx'))
writeFileSync(`${dir}/react/${name}.tw.tsx`, placeholder('tw.tsx'))

console.log(`Created ${dir}/`)
