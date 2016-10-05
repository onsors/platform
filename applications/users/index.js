const http = require('http')

/**
 * Create test service servers
 */

// Users
module.exports = function start(app_loader){

	const msg = 'Users server reached! on port ' + app_loader.port

	http.createServer(function (req, res) {
		console.log(msg)
  		res.writeHead(200)
  		res.end(msg)
	}).listen(app_loader.port)
}