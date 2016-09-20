const path = require('path')

module.exports = {
	name: 'error handling',
	order: 100,
	baseURL: '/error',
	app: require( path.join(__dirname, './src/app.js'))
}