'use strict'

const path = require('path')
const Bar = require('./bar')

module.exports = function (source, destination) {
  destination = destination || process.cwd()

  let bar = new Bar()

  // .tgz or .tar.gz
  if (source.endsWith('.tar.gz') || source.endsWith('.tgz')) {
    const targz = require('./targz')
    return targz(source, destination, bar)
  } else if (source.endsWith('.zip')) {
    const zip = require('./zip')
    return zip(source, destination, bar)
  } else {
    throw new Error('currently does NOT support extract for file type', path.extname(source))
  }
}
