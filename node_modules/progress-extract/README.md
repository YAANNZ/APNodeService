# progress-extract

extract compress file with progress bar, support CLI and node API

## Screenshot

![progress-extract](https://user-images.githubusercontent.com/4136679/28699990-8995b946-737f-11e7-9f61-af0d19534f8a.gif)

## CLI

### Install

Install as a global module

```bash
$ npm install progress-extract -g
```

### Usage

Use `extract` command to extract file

```bash
$ extract -h

  Usage: extract <file>

  extract file with progress bar


  Options:

    -V, --version          output the version number
    -d, --directory <dir>  target dir to extract
    -h, --help             output usage information

  Examples:

    $ extract example.tar.gz

```

## Node API

### Usage

```js
const extract = require('progress-extract')

let file = '/path/to/example.tar.gz'
let target = process.cwd()
extract(file, target)
  .then(() => {
    console.log('extract succeed')
  }, err => {
    console.log('extract failed')
  })
```

### API

```js
extract(source, [destination])
```

- source: source file (support `.zip`, `.tgz`, `.tar.gz`)
- destination: path where you extract to

Return Promise

## License

MIT
