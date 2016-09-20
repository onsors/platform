var path = require('path')
var feathers = require('feathers');

var serveStatic = require('feathers').static;
var hooks = require('feathers-hooks');
var memory = require('feathers-memory');
var bodyParser = require('body-parser');
var authentication = require('feathers-authentication');

// Initialize the application
var app = feathers()
  
  .configure(hooks())
  // Needed for parsing bodies (login)
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  // Configure feathers-authentication
  .configure(authentication({
    idField: 'id',
    successRedirect: "/dashboard",
    failureRedirect: "/auth/login"
  }))
  // Initialize a user and message services
  .use('/users', memory())
  .use('/messages', memory())
  .use('/', serveStatic( path.join( __dirname, '/public')))


var messageService = app.service('/messages');
messageService.create({text: 'A million people walk into a Silicon Valley bar'}, {}, function(){});
messageService.create({text: 'Nobody buys anything'}, {}, function(){});
messageService.create({text: 'Bar declared massive success'}, {}, function(){});

messageService.before({
  all: [
    authentication.hooks.verifyToken(),
    authentication.hooks.populateUser(),
    authentication.hooks.restrictToAuthenticated()
  ]
})

var userService = app.service('users');

// Add a hook to the user service that automatically replaces 
// the password with a hash of the password before saving it.
userService.before({
  create: authentication.hooks.hashPassword()
});

// Create a user that we can use to log in
var User = {
  email: 'admin@feathersjs.com',
  password: 'admin'
};

userService.create(User, {}).then(function(user) {
  console.log('Created default user', user);
});

// app.listen(3031);

module.exports = app;
