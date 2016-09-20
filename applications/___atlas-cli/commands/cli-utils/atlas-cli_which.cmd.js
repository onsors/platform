const fs = require('fs')
const path = require('path')
/*
	@version
	which version of the command line tool are we working with
*/
module.exports = function which (vorpal_instance, configs){
	vorpal_instance
		.command('which', 'Returns the root directory of the current CLI instance')
		.action(function(args, callback){
			callback(path.resolve('../'))
		})
}