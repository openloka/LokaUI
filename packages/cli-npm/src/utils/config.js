import fs from 'node:fs'
import path from 'node:path'
import { CONFIG_FILE } from '../constants.js'

function configPath() {
  return path.resolve(process.cwd(), CONFIG_FILE)
}

export function configExists() {
  return fs.existsSync(configPath())
}

export function readConfig() {
  const filePath = configPath()
  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Config file "${CONFIG_FILE}" not found. Run "lokaui init" first.`
    )
  }
  const raw = fs.readFileSync(filePath, 'utf-8')
  return JSON.parse(raw)
}

export function writeConfig(config) {
  const filePath = configPath()
  fs.writeFileSync(filePath, JSON.stringify(config, null, 2) + '\n', 'utf-8')
}
