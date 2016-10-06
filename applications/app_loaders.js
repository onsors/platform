const fs = require('fs')
const path = require('path')

/**

	Atlas provides a reverse proxy to unify any number of
	disperate applications behind a single interface.

	When Atlas is started up, it will inspect the applications
	directory for all such applications. 

	app_loaders provide the initial configuration and application
	details atlas uses to mount them.

*/
const APP_LOADERS = fs.readdirSync(__dirname)
		.filter(function(node){	
			// collect all sub-directories in the applications directory
			return fs.statSync(path.join(__dirname, node)).isDirectory()
		}).reduce(function(APPS, APP){
			APP = path.join(__dirname, APP, 'atlas_loader.js');
			try{ 
				fs.lstatSync(APP) 
				return APPS.push( require(APP) ), APPS;
			} catch(e){
				return APPS;
			}
		}, []);

module.exports = APP_LOADERS;