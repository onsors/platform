const FS = require('fs-jetpack')
const path = require('path')
/*
	@app init
	which version of the command line tool are we working with
*/
module.exports = function clear_registration (vorpal_instance, configs){
	vorpal_instance
		.command('app init', 'Will create base Atlas application files.')
		.action(function(args){

			const output = `const path = require('path')

					module.exports = {
						name: ${ details && details.APP_NAME || ''},
						order: ${ details && details.APP_ORDER || ''},
						baseURL: ${ details && details.APP_BASE_URL || ''},
						app: require( path.join(__dirname, './src/app.js'))
					}`;

			FS.write(`${process.cwd()}/app_loader.js`, output)

		})
}