'use strict';

var expect = require('chai').expect,
	path = require('path'),
	load = requireTest('load');

describe('Error test: swig-loader', function() {

	it('should throw nicely formatted error', function(done) {
		load(path.resolve(__dirname, 'template.js'), function(err, mod) {
			expect(err).to.exist;
			expect(err.message)
				.to.contain('Could not resolve swig template.')
				.and.to.contain('Cause: Error: Unexpected tag "xyz asd" on line 1 in file ')
				.and.to.contain('template.html.');
			expect(mod).to.not.exist;
			done();
		});
	});

});
