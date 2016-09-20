const path = require('path')

module.exports = {
	name: 'authentication',
	order: 5,
	baseURL: '/auth',
	app: require( path.join(__dirname, 'app.js'))
}