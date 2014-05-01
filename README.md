# metalsmith-untemplatize

A [Metalsmith](http://metalsmith.io) plugin to extract untemplatized file contents.

## Use Case

This can be pretty useful when you need to access file contents without any
template rendering in other templates (such as RSS/Atom feeds).

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
