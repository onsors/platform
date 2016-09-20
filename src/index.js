'use strict';

// Load the base application
const 	main = require('./app');
const 	port = main.get('port');

const 	http_server = main.listen(port);
		http_server.on('listening', () => {
		  console.log(`Feathers application started on ${main.get('host')}:${port}`)
		});

	// Auto Mount Sub Applications
	require('../applications').forEach(function(sub_app){
		console.log('Mounting:', sub_app.app_details.name)
		sub_app.app_loader(main, sub_app.app_details.app)
	})
