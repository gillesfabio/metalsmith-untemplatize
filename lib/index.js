'use strict';

var debug = require('debug')('metalsmith-untemplatize');

/**
 * Expose `plugin`.
 */
module.exports = plugin;

/**
 * A Metalsmith plugin to extract untemplatized file contents.
 *
 * @param  {Object} options
 * @return {Function}
 */
function plugin(options) {
  options = options || {};
  options.key = options.key || 'untemplatized';
  return function(files, metalsmith, done){
    setImmediate(done);
    Object.keys(files).forEach(function(file){
      debug('checking file: %s', file);
      var data = files[file];
      var contents = data.contents.toString().replace(/^\n+/g, '');
      debug('storing untemplatized content: %s', file);
      data[options.key] = new Buffer(contents);
    });
  };
}
