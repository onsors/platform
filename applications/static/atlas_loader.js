const path = require('path')

// Generete port number
module.exports = {
	app: 'static',
	appDir: __dirname,
	appLoader: 'index.js',
	appOptions: {
		sourceDir: path.join(__dirname, '../../http_public')
	},
	proxyMiddleware:['stripBase'],
	host: 'localhost',
	urlEntryPoint: '/static/*',
	mount: function loadApplication(app_loader){
		return require(app_loader.appDir)(app_loader)
	}
}