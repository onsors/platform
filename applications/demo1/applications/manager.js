const ATLAS = {}

ATLAS.auto_mount = function( express_instance, express){
    
    ATLAS.app = express_instance
    
    var fs = require('fs')

        fs.readdir(__dirname, function(err, files){
            
            if (err) throw err;
            files.filter(function(file){
                return fs.statSync(__dirname + "/" + file).isDirectory()
            }).forEach(function ( sub_app ) {

                //load sub_app context
                require("./" +  sub_app )

                //set context root dir as static
                ATLAS.app.use("/" +  sub_app  + "/", express.static(__dirname + "/" +  sub_app ))
            })
        
        })
}

ATLAS.getApp = function (app_dir) {
    var app_context = app_dir.substr(__dirname.length + 1)

    return {
        get: function (path, callback) {
            ATLAS.app.get("/" + app_context + path, callback)
        },
        post: function (path, callback) {
            ATLAS.app.post("/" + app_context + path, callback)
        }
    }
}   

module.exports = ATLAS