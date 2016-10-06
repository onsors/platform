const portastic = require('portastic')
const app_loaders = require('../applications/app_loaders')
const proxy = require('./atlas_proxy')

	var ports = {
		min: 7000,
		max: 7999
	}

	portastic
		// Collect available ports
		.find({ min: ports.min, max: ports.max})
		.then(function(list){
			ports.available = list
  		})
  		.then(function(){
  			/*
				Proceed...
  			*/
  			app_loaders.forEach(function(app_loader, i){
  				// record the order in which the app was recieved
  				app_loader.order = i
  				// Assign available port
  				app_loader.port = ports.available[i]
  				// mount the app_loader
				proxy.mount(app_loader)
				// log it.
  				console.log(`Application "${app_loader.app}" running on port ${app_loader.port}`)
		 	})
  		})