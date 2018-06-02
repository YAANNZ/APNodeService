'use strict'

const fs = require('fs')
const targz = require('tar.gz2')

module.exports = function (source, destination, bar) {
  return new Promise((resolve, reject) => {
    try {
      let stat = fs.statSync(source)
      let read = fs.createReadStream(source)
      let write = targz().createWriteStream(destination)
      let maxPendingBytes = (stat.size * 0.01) | 0
      let pendingBytes = 0
      let callback = (err, result) => {
        // will auto fill missing chunks
        bar.done(err)

        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      }

      bar.start(stat.size)

      // bind events
      write.on('error', err => {
        callback(err)
      })
      write.on('finish', () => {
        callback()
      })
      read.on('error', err => {
        callback(err)
      })
      read.on('data', chunk => {
        // add pending bytes for waiting write stream finished
        if (pendingBytes < maxPendingBytes) {
          pendingBytes += chunk.length
        } else {
          bar.tick(chunk.length)
        }
      })

      read.pipe(write)
    } catch (err) {
      reject(err)
    }
  })
}
