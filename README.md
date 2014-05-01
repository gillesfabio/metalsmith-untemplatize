# metalsmith-untemplatize

A [Metalsmith](http://metalsmith.io) plugin to extract untemplatized file contents.

## Installation

```
$ npm install metalsmith-untemplatize
```

## CLI Usage

```json
{
  "plugins": {
    "metalsmith-untemplatize": true
  }
}
```

## JavaScript Usage

```js

var untemplatized = require('metalsmith-untemplatize');
metalmisth.use(untemplatize());
```

## License

MIT
