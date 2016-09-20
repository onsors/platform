    'use strict';

    const mergeInto = require('lodash/merge');
    const path = require('path');


    function app_loader( ATLAS, App ){
      mergeInto( ATLAS.settings, App.settings )
      ATLAS.use( ( App.get('baseURL') || '/' ), App)
    }

    module.exports = app_loader;
