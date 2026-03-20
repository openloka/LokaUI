import * as p from '@clack/prompts'
import pc from 'picocolors'
import fs from 'node:fs'
import path from 'node:path'
import { fetchRegistry } from '../utils/registry.js'
import { readConfig, configExists } from '../utils/config.js'
import { fetchAndWriteComponent } from '../utils/fetcher.js'

export async function add(componentNames, options) {
  try {
    if (!configExists()) {
      p.cancel('No lokaui.json found. Run "npx @lokaui/cli init" first.')
      process.exit(1)
    }

    const config = readConfig()
    const framework = config.framework || 'react'
    const variantKey = deriveVariantKey(config)
    const componentsDir = path.resolve(process.cwd(), config.componentsDir)

    const spinner = p.spinner()
    spinner.start('Fetching component registry...')
    const registry = await fetchRegistry()
    spinner.stop('Registry loaded.')

    const components = registry.components

    if (options.all) {
      await addAll({ components, variantKey, componentsDir, config, framework, options })
    } else if (componentNames && componentNames.length > 0) {
      await addInline({ componentNames, components, variantKey, componentsDir, config, framework, options })
    } else {
      await addInteractive({ components, variantKey, componentsDir, config, framework, options })
    }
  } catch (error) {
    p.cancel(`Error: ${error.message}`)
    process.exit(1)
  }
}

function isAvailable(component, framework) {
  const platformData = component.platforms?.[framework]
  return platformData !== null && platformData !== undefined
}

function isInstalled(componentName, componentsDir) {
  const dir = path.resolve(componentsDir)
  if (!fs.existsSync(dir)) return false
  const files = fs.readdirSync(dir)
  return files.some(f => f.toLowerCase().startsWith(componentName.toLowerCase()))
}

async function addInline({ componentNames, components, variantKey, componentsDir, config, framework, options }) {
  const results = []

  for (const rawName of componentNames) {
    const name = rawName.toLowerCase()
    const component = components[name]

    if (!component) {
      p.log.error(`Unknown component: "${name}". Run "npx @lokaui/cli list" to see available components.`)
      continue
    }

    if (!isAvailable(component, framework)) {
      const availableFor = Object.entries(component.platforms)
        .filter(([, v]) => v !== null)
        .map(([k]) => k)
      p.log.warning(`"${component.name}" is not yet available for ${framework}. Available for: ${availableFor.join(', ')}`)
      continue
    }

    if (isInstalled(name, componentsDir) && !options.overwrite) {
      p.log.info(`"${component.name}" already installed. Use --overwrite to replace.`)
      continue
    }

    if (options.dryRun) {
      p.log.info(`${pc.dim('[dry-run]')} Would add "${component.name}" to ${config.componentsDir}/`)
      results.push(component)
      continue
    }

    const spinner = p.spinner()
    spinner.start(`Adding ${component.name}...`)
    const files = await fetchAndWriteComponent({
      component,
      componentKey: name,
      variantKey,
      componentsDir,
      framework,
    })
    spinner.stop(`${pc.green('✓')} ${component.name} → ${files.map(f => path.basename(f)).join(', ')}`)
    results.push(component)
  }

  printSummary(results, config)
}

async function addInteractive({ components, variantKey, componentsDir, config, framework, options }) {
  const grouped = {}

  for (const [key, component] of Object.entries(components)) {
    const category = component.category || 'Other'
    if (!grouped[category]) grouped[category] = []

    const available = isAvailable(component, framework)
    const installed = isInstalled(key, componentsDir)

    grouped[category].push({
      value: key,
      label: component.name,
      hint: !available ? 'coming soon' : installed ? 'installed' : undefined,
      disabled: !available,
    })
  }

  const selected = await p.groupMultiselect({
    message: 'Select components to add (space to select, enter to confirm)',
    options: grouped,
    required: true,
  })

  if (p.isCancel(selected)) {
    p.cancel('Cancelled.')
    process.exit(0)
  }

  const selectedNames = Object.values(selected).flat()

  if (!selectedNames || selectedNames.length === 0) {
    p.log.warning('No components selected.')
    return
  }

  const results = []

  for (const name of selectedNames) {
    const component = components[name]
    if (!component) continue

    if (isInstalled(name, componentsDir) && !options.overwrite) {
      p.log.info(`"${component.name}" already installed. Use --overwrite to replace.`)
      continue
    }

    if (options.dryRun) {
      p.log.info(`${pc.dim('[dry-run]')} Would add "${component.name}" to ${config.componentsDir}/`)
      results.push(component)
      continue
    }

    const spinner = p.spinner()
    spinner.start(`Adding ${component.name}...`)
    const files = await fetchAndWriteComponent({
      component,
      componentKey: name,
      variantKey,
      componentsDir,
      framework,
    })
    spinner.stop(`${pc.green('✓')} ${component.name} → ${files.map(f => path.basename(f)).join(', ')}`)
    results.push(component)
  }

  printSummary(results, config)
}

async function addAll({ components, variantKey, componentsDir, config, framework, options }) {
  const results = []
  let skipped = 0

  for (const [name, component] of Object.entries(components)) {
    if (!isAvailable(component, framework)) {
      skipped++
      continue
    }

    if (isInstalled(name, componentsDir) && !options.overwrite) {
      p.log.info(`"${component.name}" already installed. Use --overwrite to replace.`)
      continue
    }

    if (options.dryRun) {
      p.log.info(`${pc.dim('[dry-run]')} Would add "${component.name}" to ${config.componentsDir}/`)
      results.push(component)
      continue
    }

    const spinner = p.spinner()
    spinner.start(`Adding ${component.name}...`)
    const files = await fetchAndWriteComponent({
      component,
      componentKey: name,
      variantKey,
      componentsDir,
      framework,
    })
    spinner.stop(`${pc.green('✓')} ${component.name} → ${files.map(f => path.basename(f)).join(', ')}`)
    results.push(component)
  }

  if (skipped > 0) {
    p.log.info(`Skipped ${skipped} component${skipped > 1 ? 's' : ''} (coming soon for ${framework}).`)
  }

  printSummary(results, config)
}

function printSummary(results, config) {
  if (results.length === 0) {
    p.log.warning('No components were added.')
    return
  }

  p.outro(`${pc.green(results.length)} component${results.length > 1 ? 's' : ''} added to ${pc.dim(config.componentsDir + '/')}`)
}

function deriveVariantKey(config) {
  const { framework, language, styling } = config

  if (framework === 'react-native') {
    return styling === 'stylesheet' ? 'RN-StyleSheet' : 'RN-TW'
  }

  const lang = (language || 'js').toUpperCase()
  const style = (styling || 'tailwind') === 'tailwind' ? 'TW' : 'CSS'
  return `${lang}-${style}`
}
