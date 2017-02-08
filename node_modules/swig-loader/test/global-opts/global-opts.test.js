'use strict';

var expect = require('chai').expect,
	path = require('path'),
	chalk = require('chalk'),
	loader = require(__projectDir),
	load = requireTest('load');

describe('Custom options test: swig-loader', function() {

	var resolved;

	before(function(done) {
		var finish = function(err) {
			loader.options({});
			done(err);
		};
		loader.options({
			varControls: ['{:', ':}']
		});
		load(path.resolve(__dirname, 'template.js'), function(err, mod) {
			if (err) return finish(err);
			resolved = mod;
			console.log(chalk.blue('\nCustom global options test template:\n' + resolved));
			finish();
		});
	});

	it('should resolve username parameter defined with custom delimiters', function() {
		expect(resolved).to.contain('username: John');
	});

});
