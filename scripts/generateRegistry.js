import { readFileSync, writeFileSync, existsSync, readdirSync } from 'fs'
import { join, resolve } from 'path'

const ROOT = resolve(import.meta.dirname, '..')
const CONTENT_DIR = join(ROOT, 'src', 'content')
const OUTPUT = join(ROOT, 'registry.json')

const CATEGORIES = ['Foundations', 'Overlays', 'DataDisplay', 'Navigation', 'Forms', 'Feedback']

function getComponentFiles(componentDir, platform) {
  const platformDir = platform === 'react-native' ? 'react-native' : platform
  const dir = join(componentDir, platformDir)
  if (!existsSync(dir)) return null
  return readdirSync(dir).filter(f => !f.startsWith('.'))
}

function buildVariantMap(componentDir, platformKey, variantKeys) {
  if (!variantKeys || variantKeys.length === 0) return null

  const platformDir = platformKey === 'react-native' ? 'react-native' : platformKey
  const result = {}

  const variantFileMap = {
    'JS-CSS': (name) => [`${platformDir}/${name}.jsx`, `${platformDir}/${name}.css`],
    'JS-TW': (name) => [`${platformDir}/${name}.tw.jsx`],
    'TS-CSS': (name) => [`${platformDir}/${name}.tsx`, `${platformDir}/${name}.css`],
    'TS-TW': (name) => [`${platformDir}/${name}.tw.tsx`],
    'HTML-TW': (name) => [`laravel/${name.toLowerCase()}.blade.php`],
    'RN-TW': (name) => [`react-native/${name}.tw.tsx`],
    'RN-StyleSheet': (name) => [`react-native/${name}.stylesheet.tsx`],
  }

  for (const key of variantKeys) {
    const mapper = variantFileMap[key]
    if (mapper) {
      const componentName = componentDir.split('/').pop()
      const files = mapper(componentName)
      // Only include files that actually exist on disk
      const existing = files.filter(f => existsSync(join(componentDir, f)))
      result[key] = existing
    }
  }

  return Object.keys(result).length > 0 ? result : null
}

function generateRegistry() {
  const registry = {
    version: '0.1.0',
    components: {},
    tokens: {
      css: 'tokens/tokens.css',
    },
  }

  for (const category of CATEGORIES) {
    const categoryDir = join(CONTENT_DIR, category)
    if (!existsSync(categoryDir)) continue

    const components = readdirSync(categoryDir, { withFileTypes: true })
      .filter(d => d.isDirectory())
      .map(d => d.name)

    for (const componentName of components) {
      const componentDir = join(categoryDir, componentName)
      const key = componentName.toLowerCase()

      // Read info.js to get metadata
      let info = {}
      const infoPath = join(componentDir, 'info.js')
      if (existsSync(infoPath)) {
        const content = readFileSync(infoPath, 'utf-8')
        const nameMatch = content.match(/name:\s*['"]([^'"]+)['"]/)
        const statusMatch = content.match(/status:\s*['"]([^'"]+)['"]/)
        info.name = nameMatch ? nameMatch[1] : componentName
        info.status = statusMatch ? statusMatch[1] : 'stable'
      }

      // Read index.js to get platforms
      const indexPath = join(componentDir, 'index.js')
      if (!existsSync(indexPath)) continue

      const indexContent = readFileSync(indexPath, 'utf-8')

      // Parse platforms from index.js
      const platformsMatch = indexContent.match(/export\s+const\s+platforms\s*=\s*\{([^}]+)\}/s)
      if (!platformsMatch) continue

      const platformsBlock = platformsMatch[1]

      const entry = {
        name: info.name || componentName,
        category,
        status: info.status || 'stable',
        platforms: {},
      }

      // Parse react platform
      const reactMatch = platformsBlock.match(/react:\s*\[([^\]]*)\]/)
      if (reactMatch) {
        const keys = reactMatch[1].match(/'([^']+)'/g)?.map(k => k.replace(/'/g, '')) || []
        entry.platforms.react = buildVariantMap(componentDir, 'react', keys)
      }

      // Parse laravel platform
      if (platformsBlock.includes('laravel:')) {
        const laravelNull = platformsBlock.match(/laravel:\s*null/)
        if (laravelNull) {
          entry.platforms.laravel = null
        } else {
          const laravelMatch = platformsBlock.match(/laravel:\s*\[([^\]]*)\]/)
          if (laravelMatch) {
            const keys = laravelMatch[1].match(/'([^']+)'/g)?.map(k => k.replace(/'/g, '')) || []
            entry.platforms.laravel = buildVariantMap(componentDir, 'laravel', keys)
          }
        }
      } else {
        entry.platforms.laravel = null
      }

      // Parse react-native platform
      if (platformsBlock.includes("'react-native':") || platformsBlock.includes('"react-native":')) {
        const rnNull = platformsBlock.match(/['"]react-native['"]\s*:\s*null/)
        if (rnNull) {
          entry.platforms['react-native'] = null
        } else {
          const rnMatch = platformsBlock.match(/['"]react-native['"]\s*:\s*\[([^\]]*)\]/)
          if (rnMatch) {
            const keys = rnMatch[1].match(/'([^']+)'/g)?.map(k => k.replace(/'/g, '')) || []
            entry.platforms['react-native'] = buildVariantMap(componentDir, 'react-native', keys)
          }
        }
      } else {
        entry.platforms['react-native'] = null
      }

      registry.components[key] = entry
    }
  }

  writeFileSync(OUTPUT, JSON.stringify(registry, null, 2) + '\n')
  console.log(`Registry generated with ${Object.keys(registry.components).length} components → registry.json`)
}

generateRegistry()
