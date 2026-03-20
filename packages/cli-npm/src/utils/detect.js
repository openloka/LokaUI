import fs from 'node:fs'
import path from 'node:path'

function fileExists(relativePath) {
  return fs.existsSync(path.resolve(process.cwd(), relativePath))
}

function readFileIfExists(relativePath) {
  const fullPath = path.resolve(process.cwd(), relativePath)
  if (fs.existsSync(fullPath)) {
    return fs.readFileSync(fullPath, 'utf-8')
  }
  return null
}

function detectLanguage() {
  return fileExists('tsconfig.json') ? 'ts' : 'js'
}

function detectStyling() {
  const tailwindConfigs = [
    'tailwind.config.js',
    'tailwind.config.ts',
    'tailwind.config.cjs',
    'tailwind.config.mjs',
  ]

  for (const config of tailwindConfigs) {
    if (fileExists(config)) return 'tailwind'
  }

  const cssFiles = [
    'src/styles.css',
    'src/index.css',
    'src/app.css',
    'src/globals.css',
  ]

  for (const cssFile of cssFiles) {
    const content = readFileIfExists(cssFile)
    if (content && content.includes("@import 'tailwindcss'")) {
      return 'tailwind'
    }
  }

  return 'css'
}

function detectFramework() {
  const pkgPath = path.resolve(process.cwd(), 'package.json')
  if (fs.existsSync(pkgPath)) {
    try {
      const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'))
      const deps = { ...pkg.dependencies, ...pkg.devDependencies }
      if (deps['react-native']) return 'react-native'
    } catch {
      // ignore parse errors
    }
  }
  return 'react'
}

export function detectProject() {
  return {
    framework: detectFramework(),
    language: detectLanguage(),
    styling: detectStyling(),
  }
}
