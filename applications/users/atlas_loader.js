// Generete port number
module.exports = {
	app: 'users',
	appDir: __dirname,
	appLoader: 'index.js',
	host: 'localhost',
	urlEntryPoint: '/users/*',
	mount: function loadApplication(app_loader){
		return require(app_loader.appDir)(app_loader)
	}
}