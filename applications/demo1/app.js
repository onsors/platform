var express = require('express');
var http = require('http');
var path = require('path');
var fs = require("fs");
var main = express();

	main.set('port', process.env.PORT || 3000);

	main.use(express.favicon());
	main.use(express.logger('dev'));
	main.use(express.json());
	main.use(express.urlencoded());
	main.use(express.methodOverride());
	main.use(main.router);

	require("./applications/manager.js").auto_mount(main, express);

	http.createServer(main).listen(main.get('port'), function(){
	  console.log('Express server listening on port ' + main.get('port'));
	});
