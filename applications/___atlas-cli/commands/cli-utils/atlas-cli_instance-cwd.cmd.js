const fs = require('fs')
const path = require('path')
/*
	@version
	which version of the command line tool are we working with
*/
module.exports = function cwd (vorpal, configs){
	vorpal
		.command('cwd', 'will return the current working directory')
		.action(function(args, callback){
			callback( path.resolve(__dirname, '../') )
		})
}