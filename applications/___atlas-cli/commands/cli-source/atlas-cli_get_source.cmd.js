const fs = require('fs')
const path = require('path')
/*
	@version
	which version of the command line tool are we working with
*/
module.exports = function get_source (vorpal_instance, configs){
	vorpal_instance
		.command('get source', 'Will set the source from the current instance')
		.alias('source')
		.action(function(args, callback){
			var config_file = path.resolve('./config/defaults.json'),
				configs = fs.readFileSync(config_file),
				content = JSON.parse(configs)
			callback(content.source || 'Source not defined')
		})
}