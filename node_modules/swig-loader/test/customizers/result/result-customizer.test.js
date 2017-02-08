'use strict';

var expect = require('chai').expect,
	path = require('path'),
	chalk = require('chalk'),
	loader = require(__projectDir),
	load = requireTest('load');

describe('Result customizer test: swig-loader', function() {

	afterEach(function() {
		loader.resultCustomizer();
	});

	it('should use result customizer', function(done) {
		loader.resultCustomizer(function(r) {
			return r.replace(/b/g, 'a');
		});
		load(path.resolve(__dirname, 'template.js'), function(err, result) {
			if (err) return done(err);
			console.log(chalk.blue(result));
			expect(result.trim()).to.be.eql('aaaa');
			done();
		});
	});

	it('should pass filepath to result customizer', function(done) {
		loader.resultCustomizer(function(r, filepath) {
			return filepath;
		});
		load(path.resolve(__dirname, 'template.js'), function(err, result) {
			if (err) return done(err);
			var templatePath = path.resolve(__dirname, 'template.html');
			console.log(chalk.blue(result));
			expect(result.trim()).to.be.eql(templatePath);
			done();
		});
	});

	it('should pass query params to result customizer', function(done) {
		var query, resourceQuery;
		loader.resultCustomizer(function(r, filepath, q, rq) {
			query = q;
			resourceQuery = rq;
			return r;
		});
		load(path.resolve(__dirname, 'template-query.js'), function(err, result) {
			if (err) return done(err);
			console.log(chalk.blue(result), query, resourceQuery);
			expect(query).to.be.eql({ x: 'x' });
			expect(resourceQuery).to.be.eql({ y: 'y' });
			done();
		});
	});

});
