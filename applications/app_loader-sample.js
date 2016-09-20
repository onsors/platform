const path = require('path')

const 	app = {}
		app.name = '<Some Name Here>'
		app.order = 10
		app.baseUrl = '<RELATIVE URL GOES HERE>'
		app.app = require( path.join(__dirname, './src/app.js'))

module.exports = app;