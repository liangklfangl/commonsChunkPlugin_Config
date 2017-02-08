'use strict';

var expect = require('chai').expect,
	path = require('path'),
	chalk = require('chalk'),
	load = requireTest('load');

describe('Layout test: swig-loader', function() {

	var resolved;

	before(function(done) {
		load(path.resolve(__dirname, './template.js'), function(err, mod) {
			if (err) return done(err);
			resolved = mod;
			console.log(chalk.blue('\nLayout test template:\n' + resolved));
			done();
		});
	});

	it('should create not empty string', function() {
		expect(resolved).to.exist
			.and.to.be.a('string')
			.and.to.be.not.empty;
	});

	it('should load layout file', function() {
		expect(resolved).to.contain('LAYOUT');
	});

	it('should load template file', function() {
		expect(resolved).to.contain('TEMPLATE');
	});

	it('should load partial file', function() {
		expect(resolved).to.contain('PARTIAL');
	});

});
