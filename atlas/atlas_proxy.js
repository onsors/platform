const rocky = require('rocky')
const http = require('http')
const rewrite = require('express-url-rewrite')
/**
    
    This is the reverse proxy used by Atlas.

*/
const proxy = rocky().listen(8333)
      console.log('Proxy running on port ' + proxy.opts.port)

module.exports = {
  proxy: proxy,
  mount: function( app_loader, app ){
    app_loader.instance = require( app_loader.appDir + '/' + app_loader.appLoader)(app_loader)
    proxy
      .all(app_loader.urlEntryPoint)
      .forward('http://' + app_loader.host + ':' + app_loader.port)
  }
}
