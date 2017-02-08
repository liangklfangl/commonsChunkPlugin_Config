'use strict';

var expect = require('chai').expect,
	path = require('path'),
	chalk = require('chalk'),
	loader = require(__projectDir),
	load = requireTest('load');

describe('Query customizer test: swig-loader', function() {

	afterEach(function() {
		loader.queryCustomizer();
	});

	it('should use query customizer with empty query', function(done) {
		loader.queryCustomizer(function(query) {
			query.locals = query.locals || {};
			query.locals.y = 'y';
		});
		load(path.resolve(__dirname, 'template.js'), function(err, result) {
			if (err) return done(err);
			console.log(chalk.blue(result));
			expect(result.trim()).to.be.eql('xyz');
			done();
		});
	});

	it('should use query customizer with non-empty query', function(done) {
		loader.queryCustomizer(function(query) {
			query.locals = query.locals || {};
			query.locals.y = 'y';
		});
		load(path.resolve(__dirname, 'template-query.js'), function(err, result) {
			if (err) return done(err);
			console.log(chalk.blue(result));
			expect(result.trim()).to.be.eql('xyz');
			done();
		});
	});

	it('should pass filepath to query customizer', function(done) {
		loader.queryCustomizer(function(query, filepath) {
			query.locals = query.locals || {};
			query.locals.y = filepath;
		});
		load(path.resolve(__dirname, 'template.js'), function(err, result) {
			if (err) return done(err);
			var templatePath = path.resolve(__dirname, 'template.html');
			console.log(chalk.blue(result));
			expect(result.trim()).to.be.eql('x' + templatePath + 'z');
			done();
		});
	});

});
