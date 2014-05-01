# metalsmith-untemplatize

A [Metalsmith](http://metalsmith.io) plugin to extract untemplatized file contents.
This can be pretty useful for RSS/Atom feed content.

## Installation

```
$ npm install --save metalsmith-untemplatize
```

## CLI Usage

```json
{
  "plugins": {
    "metalsmith-untemplatize": {
      "key": "untemplatized"
    }
  }
}
```

## API Usage

```js
var untemplatize = require('metalsmith-untemplatize');
metalmisth.use(untemplatize({
  key: 'untemplatized'
}));
```

## Plugin Order

Be sure to add this plugin **before** [metalsmith-templates](https://github.com/segmentio/metalsmith-templates)
and **after** any rendering content plugin like [metalsmith-markdown](https://github.com/segmentio/metalsmith-markdown).

Example:

```js
Metalsmith(__dirname)
  .use(markdown())
  .use(untemplatize())
  .use(templates('handlebars'))
  .build();
```

## Options

### key

The key name which stores the untemplatized content. Defaults to `untemplatized`.
Feel free to use your own (example: `content`, `body`, `banana` or anything else).

## License

MIT
