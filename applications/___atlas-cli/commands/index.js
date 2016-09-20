const FS = require('fs-jetpack')

/**
    Collect all commands in this directory. Returns a collection
    of what was found.
*/
var commands = [];
var registry = __dirname.split('/').pop() == 'commands' ? __dirname + '/registry.json' : __dirname + '/commands/registry.json';

if( !FS.exists(registry) ){
  commands = FS.cwd(__dirname).find(__dirname, { matching: ['*.cmd.js'] })
  FS.write(registry, JSON.stringify(commands, null, 2))
} else {
  commands = JSON.parse(FS.read(registry))
}

module.exports = commands.map(function(file_name){ return require(`${__dirname}/${file_name}`)})