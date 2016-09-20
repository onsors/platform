#!/usr/bin/env node

'use strict'

const CONFIG = require('./config/defaults.json')

var	vorpal = require('vorpal')()

	// Autoload all commands
	require('./commands').forEach(function command_loader( command_loader ){
		command_loader(vorpal, CONFIG)
    })

	/*
		Bootstrap the CLI
	*/
	vorpal
		.delimiter('@las:')
		.show()