/* global describe:true, it:true */
'use strict';

var assert        = require('assert');
var metalsmith    = require('metalsmith');
var markdown      = require('metalsmith-markdown');
var templates     = require('metalsmith-templates');
var untemplatized = require('..');

var TEMPLATES_OPTIONS = {
  engine    : 'swig',
  directory : '../templates'
};

describe('metalsmith-untemplatized', function() {
  it('should set untemplatized content for Markdown generated files', function(done) {
    metalsmith('test/fixtures/markdown')
      .use(markdown())
      .use(untemplatized())
      .use(templates(TEMPLATES_OPTIONS))
      .build(function(err, files) {
        if (err) return done(err);
        assert.equal('<p>content</p>\n', files['index.html'].untemplatized.toString());
        done();
      });
  });
  it('should set untemplatized content for HTML files', function(done) {
    metalsmith('test/fixtures/html')
      .use(untemplatized())
      .use(templates(TEMPLATES_OPTIONS))
      .build(function(err, files) {
        if (err) return done(err);
        assert.equal('<p>content</p>\n', files['index.html'].untemplatized.toString());
        done();
      });
  });
  it('should set a custom key to store untemplatized content', function(done) {
    metalsmith('test/fixtures/markdown')
      .use(markdown())
      .use(untemplatized({key: 'content'}))
      .use(templates(TEMPLATES_OPTIONS))
      .build(function(err, files) {
        if (err) return done(err);
        assert.equal('<p>content</p>\n', files['index.html'].content.toString());
        done();
      });
  });
});
