const rocky = require('rocky')
const http = require('http')

/**
    This is the reverse proxy used by Atlas.
*/
const proxy = rocky().listen(8333)
      console.log('Proxy running on port ' + proxy.opts.port)

module.exports = {
  	proxy: proxy,
  	/**
		Callback function that mounts an app_loader onto this proxy
  	*/
  	mount: function( app_loader, app ){
    	// ensure we have a reference to the app instance for use later.
    	app_loader.instance = require( app_loader.appDir + '/' + app_loader.appLoader)(app_loader)
    	// Mount the app instance onto this proxy.
    	proxy
      		.all(app_loader.urlEntryPoint)
      		.forward('http://' + app_loader.host + ':' + app_loader.port)
  	}
}