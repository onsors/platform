/**
	We need to mount our sub applications, the order in which these
	applications are loaded will affect routing. 

	If we mount the apps in the wrong order we might inadvertinly 
	block access some or all other routes.

	Applications with catch-all routes should be mounted last.

	Each application will specify it's own weight, we just sort them
	here.
*/

const fs = require('fs')
const path = require('path')
const app_loader = require('./app_loader.js')

const apps =  fs.readdirSync(__dirname, function(err, items){
		if(err) return false;

		return 	items.filter(function(path){
					return path[0] !== '.' && fs.lstatSync(path.join(__dirname, path)).isDirectory()
				})
	})

	// inspect each directory, keeping only those with app_loaders
	.filter(function(dir){

  		try {
  			fs.lstatSync( path.join(__dirname, dir, './app_loader.js') )
  			return true
  		} catch(e){
  			return false
  		}
  	})

		// load each application
  	.map(function app_loader( app_dir ){
  		return require(path.join(__dirname, app_dir, './app_loader.js'))
  	})
  	
  	// buildup our apps object, an array of apps in order, and properties for each application.
  	.reduce(function catalog(catalog, app){
  		catalog.push( [ app.order, app ])
  		return catalog
  	}, [])

  	// sort our applications so they are mounted in order
  	.sort(function(a, b){
  		return a[0] - b[0]
  	})

  	// return just the apps, in a list.
  	.reduce(function mount( apps,  app_tuple ){
  		return apps.push({ app_details: app_tuple[1 /* App Loader Object */], app_loader: app_loader }), apps
  	}, [])

 module.exports = apps // We will have an array of App Loader Objects.