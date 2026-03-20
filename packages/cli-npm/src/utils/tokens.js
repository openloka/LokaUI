import fs from 'node:fs'
import path from 'node:path'
import { TOKENS_URL } from '../constants.js'
import { fetchFile } from './registry.js'

export async function injectTokens(cssFilePath) {
  const fullPath = path.resolve(process.cwd(), cssFilePath)
  const tokens = await fetchFile(TOKENS_URL)

  if (fs.existsSync(fullPath)) {
    const existing = fs.readFileSync(fullPath, 'utf-8')
    if (existing.includes('--bg:')) {
      return { skipped: true, path: fullPath }
    }
    const updated = existing + '\n' + tokens
    fs.writeFileSync(fullPath, updated, 'utf-8')
  } else {
    fs.mkdirSync(path.dirname(fullPath), { recursive: true })
    fs.writeFileSync(fullPath, tokens, 'utf-8')
  }

  return { skipped: false, path: fullPath }
}
