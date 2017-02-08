'use strict';

var expect = require('chai').expect,
	path = require('path'),
	chalk = require('chalk'),
	load = requireTest('load');

describe('Custom options test: swig-loader', function() {

	var resolved;

	before(function(done) {
		load(path.resolve(__dirname, 'template.js'), function(err, mod) {
			if (err) return done(err);
			resolved = mod;
			console.log(chalk.blue('\nCustom options test template:\n' + resolved));
			done();
		});
	});

	it('should resolve username parameter defined with custom delimiters', function() {
		expect(resolved).to.contain('username: John');
	});

});
