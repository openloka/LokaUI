import fs from 'node:fs'
import path from 'node:path'
import { GITHUB_RAW_BASE } from '../constants.js'
import { fetchFile } from './registry.js'

/**
 * Try to read from a local LokaUI repo (if registry was loaded locally),
 * otherwise fetch from GitHub.
 */
async function getFileContent(component, filePath) {
  // Try local first: look for the file relative to CWD (for development)
  const localPath = path.resolve(
    process.cwd(),
    'src',
    'content',
    component.category,
    component.name,
    filePath
  )
  if (fs.existsSync(localPath)) {
    return fs.readFileSync(localPath, 'utf-8')
  }

  // Fall back to GitHub
  const url = `${GITHUB_RAW_BASE}/src/content/${component.category}/${component.name}/${filePath}`
  return fetchFile(url)
}

export async function fetchAndWriteComponent({
  component,
  componentKey,
  variantKey,
  componentsDir,
  framework,
}) {
  const platformData = component.platforms?.[framework]
  if (!platformData) {
    throw new Error(
      `"${componentKey}" is not yet available for ${framework}.`
    )
  }

  const files = platformData[variantKey]
  if (!files || files.length === 0) {
    throw new Error(`No files found for "${componentKey}" variant "${variantKey}".`)
  }

  const writtenFiles = []

  for (const filePath of files) {
    const content = await getFileContent(component, filePath)

    // Write directly to componentsDir
    const destPath = path.resolve(componentsDir, path.basename(filePath))
    fs.mkdirSync(path.dirname(destPath), { recursive: true })
    fs.writeFileSync(destPath, content, 'utf-8')
    writtenFiles.push(destPath)
  }

  return writtenFiles
}
