const path = require('path')

module.exports = {
	name: 'timesheets',
	order: 10,
	baseURL: '/timesheets',
	app: require( path.join(__dirname, './src/app.js'))
}