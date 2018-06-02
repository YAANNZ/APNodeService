#!/usr/bin/env node

'use strict'

const path = require('path')
const program = require('commander')
const extract = require('..')
const pkg = require('../package.json')
const chalk = require('chalk')

program
  .version(pkg.version)
  .description('extract file with progress bar')
  .usage('<file>')
  .option('-d, --directory <dir>', 'target dir to extract')
  .arguments('<file>')
  .on('--help', () => {
    console.log()
    console.log('  Examples:')
    console.log()
    console.log('    $ extract example.tar.gz')
    console.log()
  })
  .parse(process.argv)

let file = program.args[0]
let opts = program.opts()

if (!file) {
  console.error(chalk.red('[i] extract file is invalid!'))
  program.help()
} else {
  let dir = process.cwd()
  if (opts.dir) {
    dir = path.resolve(opts.dir)
  }
  extract(file, dir)
    .catch(err => {
      console.error('extract error: %s', chalk.red(err))
    })
}
