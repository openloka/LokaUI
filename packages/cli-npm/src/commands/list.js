import * as p from '@clack/prompts'
import pc from 'picocolors'
import fs from 'node:fs'
import path from 'node:path'
import { fetchRegistry } from '../utils/registry.js'
import { readConfig, configExists } from '../utils/config.js'

export async function list() {
  try {
    const spinner = p.spinner()
    spinner.start('Fetching component registry...')

    const registry = await fetchRegistry()

    spinner.stop('Registry loaded.')

    let config = null
    if (configExists()) {
      config = readConfig()
    }

    const framework = config?.framework ?? 'react'
    const componentsDir = config?.componentsDir ?? 'src/components/ui'

    const components = registry.components
    const entries = Object.entries(components)

    if (entries.length === 0) {
      p.log.warning('No components found in registry.')
      return
    }

    // Group by category
    const grouped = {}
    for (const [key, component] of entries) {
      const category = component.category || 'Other'
      if (!grouped[category]) grouped[category] = []
      grouped[category].push([key, component])
    }

    console.log('')
    console.log(pc.bold('  Component') + ' '.repeat(15) + pc.bold('React') + '    ' + pc.bold('Laravel') + '   ' + pc.bold('React Native'))
    console.log('  ' + '─'.repeat(65))

    for (const [category, items] of Object.entries(grouped)) {
      console.log(`  ${pc.dim(category.toUpperCase())}`)

      for (const [key, component] of items) {
        const name = (component.name || key).padEnd(24)

        const reactStatus = getStatus(component, 'react', key, componentsDir)
        const laravelStatus = getStatus(component, 'laravel', key, componentsDir)
        const rnStatus = getStatus(component, 'react-native', key, componentsDir)

        console.log(`    ${name} ${reactStatus.padEnd(14)} ${laravelStatus.padEnd(14)} ${rnStatus}`)
      }
    }

    console.log('')
  } catch (error) {
    p.cancel(`Error: ${error.message}`)
    process.exit(1)
  }
}

function getStatus(component, framework, key, componentsDir) {
  const platformData = component.platforms?.[framework]

  if (platformData === null || platformData === undefined) {
    return pc.yellow('coming soon')
  }

  const dir = path.resolve(process.cwd(), componentsDir)
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir)
    const installed = files.some(f => f.toLowerCase().startsWith(key.toLowerCase()))
    if (installed) {
      return pc.blue('installed')
    }
  }

  return pc.green('✓')
}
