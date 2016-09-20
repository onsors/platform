const fs = require('fs')
const path = require('path')
/*
	@version
	which version of the command line tool are we working with
*/
module.exports = function register_source (vorpal_instance, configs){
	vorpal_instance
		.command('register source', 'Will set a source from the current instance')
		.action(function(args, callback){
			var config_file = path.resolve('./config/defaults.json'),
				configs = fs.readFileSync(config_file),
				content = JSON.parse(configs)
				content.source = path.resolve(__dirname, '../')

				fs.writeFile(config_file, JSON.stringify(content, null, 2), function(err){
					if( err ) console.log( err ), callback(false);
					callback(content.source)
				})
		})
}