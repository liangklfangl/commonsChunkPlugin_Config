'use strict';

var expect = require('chai').expect,
	path = require('path'),
	chalk = require('chalk'),
	load = requireTest('load');

describe('Params test: swig-loader', function() {

	var resolved;

	before(function(done) {
		load(path.resolve(__dirname, 'template.js'), function(err, mod) {
			if (err) return done(err);
			resolved = mod;
			console.log(chalk.blue('\nParams test template:\n' + resolved));
			done();
		});
	});

	it('should resolve username parameter', function() {
		expect(resolved).to.contain('username: John');
	});

	it('should resolve array parameter', function() {
		expect(resolved).to.contain('array: ["a","b"]');
	});

	it('should resolve object parameter', function() {
		expect(resolved).to.contain('nested: "{y:{z:nested}}"');
	});

});
