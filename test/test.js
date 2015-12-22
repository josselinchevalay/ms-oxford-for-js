var assert = require('assert');
var Oxford = require('../src/');

describe('Oxford', function(){
	describe('constantes', function(){
		it('should be have constantes level', function(){
			assert.equal(true, Oxford.Constantes.LEVEL.ALL == 'all');
		});
	});
});