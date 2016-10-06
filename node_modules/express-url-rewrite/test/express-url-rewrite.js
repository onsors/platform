var assert  = require('assert');
var request = require('supertest');
var rewrite = require('..');
var express = require('express');

describe('express-url-rewrite', function() {
  it('should rewrite request url', function(done) {
    var app = express();

    app.use(rewrite('http://*.example.com/*', '/$1/$2'));
    
    app.use(function(req, res){
      res.send(req.url);
    });
    
    request(app)
      .get('/bar')
      .set('Host', 'foo.example.com')
      .expect(200, '/foo/bar', done);
  });
});