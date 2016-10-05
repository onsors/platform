# express-url-rewrite

Rewrite express `request` params using patterns

[![NPM Package](https://img.shields.io/npm/v/express-url-rewrite.svg?style=flat)](https://www.npmjs.org/package/express-url-rewrite)
[![Build Status](https://travis-ci.org/seedalpha/express-url-rewrite.svg?branch=master)](https://travis-ci.org/seedalpha/express-url-rewrite/branches)
[![Dependencies](https://david-dm.org/seedalpha/express-url-rewrite.svg)](https://david-dm.org/seedalpha/express-url-rewrite)

### Usage

```javascript

var express = require('express');
var rewrite = require('express-url-rewrite');

var app = express();

app.use(rewrite('http://*.example.com/*', { url: '/$1/$2' }));

//...

```

### Installation

    $ npm install express-url-rewrite --save

### Development

    $ git clone git@github.com:seedalpha/express-url-rewrite.git
    $ cd express-url-rewrite
    $ npm install
    $ npm test

### License

The MIT License (MIT)
Copyright © 2015 SeedAlpha

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.