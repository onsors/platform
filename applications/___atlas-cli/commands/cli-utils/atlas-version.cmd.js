/*
	@version
	which version of the command line tool are we working with
*/
module.exports = function version (vorpal_instance, configs){
	vorpal_instance
		.command('version', 'Outputs the current version of the Atlas Command Line Tool')
		.action(function(args, callback){
			this.log('currently using version : ' + configs.VERSION)
			callback()
		})
}