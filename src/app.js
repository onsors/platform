'use strict';

const path = require('path');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const socketio = require('feathers-socketio');
const compress = require('compression');
const bodyParser = require('body-parser');
const cors = require('cors');

const middleware = require('./middleware');
const hooks = require('feathers-hooks');
const services = require('./services');

const app = feathers();

app.configure(configuration(path.join(__dirname, '..')));

app.use(compress())
  .options('*', cors())
  .use(cors())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .configure(hooks())
  .configure(socketio())
  .configure(services)
  .configure(middleware);


app.set('login', 'Ok so we can share accross applications')
module.exports = app;
