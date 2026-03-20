import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { REGISTRY_URL } from '../constants.js'

const MAX_RETRIES = 3
const BASE_DELAY = 500

async function fetchWithRetry(url, retries = MAX_RETRIES) {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      return response
    } catch (error) {
      if (attempt === retries) {
        throw new Error(
          `Failed to fetch ${url} after ${retries} attempts: ${error.message}`
        )
      }
      const delay = BASE_DELAY * Math.pow(2, attempt - 1)
      await new Promise((resolve) => setTimeout(resolve, delay))
    }
  }
}

export async function fetchRegistry() {
  // Try local registry first (for development/testing)
  try {
    const localPath = resolve(process.cwd(), 'registry.json')
    const content = readFileSync(localPath, 'utf-8')
    return JSON.parse(content)
  } catch {
    // Fall back to remote
  }

  const response = await fetchWithRetry(REGISTRY_URL)
  return response.json()
}

export async function fetchFile(url) {
  const response = await fetchWithRetry(url)
  return response.text()
}
