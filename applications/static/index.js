var static = require('./lib/node-static');

//
// Create a node-static server to serve the current directory
//
module.exports = function start(app_loader){
	var file = new static.Server(app_loader.appOptions.sourceDir, { cache: 7200, headers: {'X-Atlas':'Static Files Server'} });
	require('http').createServer(function (request, response) {
    file.serve(request, response, function (err, res) {
        if (err) { // An error as occured
            console.error("> Error serving " + request.url + " - " + err.message);
            response.writeHead(err.status, err.headers);
            response.end();
        } else { // The file was served successfully
            console.log("> " + request.url + " - " + res.message);
        }
    });
    console.log(app_loader.port)
	}).listen(app_loader.port);
}