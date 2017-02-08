# Webpack Swig loader

[![Travis build status](https://travis-ci.org/coditorium/nodejs-swig-loader.png?branch=master)](https://travis-ci.org/coditorium/nodejs-swig-loader)
[![dependencies](https://david-dm.org/coditorium/nodejs-swig-loader.png)](https://david-dm.org/coditorium/nodejs-swig-loader)
[![Coverage Status](https://coveralls.io/repos/coditorium/nodejs-swig-loader/badge.svg)](https://coveralls.io/r/coditorium/nodejs-swig-loader)

[![NPM info](https://nodei.co/npm/swig-loader.png?downloads=true)](https://www.npmjs.com/package/swig-loader)

Webpack loader for [swig](http://paularmstrong.github.io/swig) templates.

## How to use

### Webpack configuration

You can define swig loader using webpack configuration.

``` javascript
{
  module: {
    loaders: [
      { test: /\.swig$/, loader: "swig-loader" }
    ]
  }
};
```

### Require parameter

You can load swig template using require parameter.

``` javascript
var template = require('swig!./template.swig');
```

### Passing swig options

You can pass [swig options](http://paularmstrong.github.io/swig/docs/api/#SwigOpts) to the loader using `swigLoader.options({ ... })` or loader query parameters. If you choose loader query parameters take a look at query [webpack standard query format](https://github.com/webpack/loader-utils#parsequery).

``` javascript
// Option #1 - Swig loader global options
var swigLoader = require('swig-loader');
swigLoader.options({
  varControls: ['{:', ':}']
});

// Option #2 - Swig loader query parameters
var swigLoader = require('swig?varControls[]={:&varControls[]=:}!./template.swig');
```

### Passing template parameters

You can pass template parameters to the loader using resource query parameters. If you need to pass some parameters take a look at query [webpack standard query format](https://github.com/webpack/loader-utils#parsequery).

``` javascript
var swigLoader = require('swig!./template.swig?username=John');
```

### Customizers

You can customize `query`, `resourceQuery` and `result` using customizers:

``` javascript
var swigLoader = require('swig-loader');

swigLoader.queryCustomizer(function(query, templatepath) {
    // modify query
});

swigLoader.resourceQueryCustomizer(function(resourceQuery, templatepath) {
    // modify resource query
});

swigLoader.resultCustomizer(function(query, templatepath, resourceQuery, query) {
    // modify result and don't forget to return it!
    return result;
});
```
