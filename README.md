# metalsmith-untemplatized

A [Metalsmith](http://metalsmith.io) plugin to extract untemplatized file contents.

## Installation

```
$ npm install metalsmith-untemplatized
```

## CLI Usage

```json
{
  "plugins": {
    "metalsmith-untemplatized": true
  }
}
```

## JavaScript Usage

```js

var untemplatized = require('metalsmith-untemplatized');
metalmisth.use(untemplatized());
```

## License

MIT
