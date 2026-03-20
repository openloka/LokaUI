#!/usr/bin/env node

import { Command } from 'commander'
import { VERSION } from '../src/constants.js'
import { init } from '../src/commands/init.js'
import { add } from '../src/commands/add.js'
import { list } from '../src/commands/list.js'

const program = new Command()

program
  .name('lokaui')
  .description('CLI to add LokaUI components to your project')
  .version(VERSION)

program
  .command('init')
  .description('Initialize LokaUI in your project')
  .action(init)

program
  .command('add')
  .description('Add components to your project')
  .argument('[components...]', 'component names to add')
  .option('--overwrite', 'overwrite existing components')
  .option('--all', 'add all available components')
  .option('--dry-run', 'show what would be added without writing files')
  .action(add)

program
  .command('list')
  .description('List all available components')
  .action(list)

program.parse()
