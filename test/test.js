var assert = require('assert');
var Oxford = require('../src/');

/**
 * key for test
 */
var ComputerVision  = process.env.OXFORD_COMPUTE_VISION_KEY;

describe('Oxford', function(){
	describe('constantes', function(){
		it('Oxford constante level all', function(){
			assert.equal(true, Oxford.Constantes.LEVEL.ALL == 'All');
		});
		it('Oxford constante level ImageType', function(){
			assert.equal(true, Oxford.Constantes.LEVEL.TYPE_IMG == 'ImageType');
		});
		it('Oxford constante level COLOR', function(){
			assert.equal(true, Oxford.Constantes.LEVEL.COLOR == 'Color');
		});
		it('Oxford constante level FACES', function(){
			assert.equal(true, Oxford.Constantes.LEVEL.FACES == 'Faces');
		});
		it('Oxford constante level ADULT', function(){
			assert.equal(true, Oxford.Constantes.LEVEL.ADULT == 'Adult');
		});
		it('Oxford constante level CATEGORIE', function(){
			assert.equal(true, Oxford.Constantes.LEVEL.CATEGORIE == 'Categories');
		});
		it('Oxford constante URL computer_vision', function(){
			assert.equal(true, Oxford.Constantes.URL.COMPUTER_VISION == 'https://api.projectoxford.ai/vision/v1/analyses');
		});
	});
	describe('requestAPI', function(){
		it('create new request for computer vision', function(){
			var req = Oxford.create(ComputerVision, {'level': Oxford.Constantes.LEVEL.ALL},Oxford.Constantes.API.COMPUTER_VISION);
			assert.equal(true, req.key == ComputerVision );
			assert.equal(true, req.params['visualFeatures']== Oxford.Constantes.LEVEL.ALL );
			assert.equal(true, req.url_api == Oxford.Constantes.URL.COMPUTER_VISION);
		});
		it('prepare data for excute', function(){
			var req = Oxford.create(ComputerVision, {'level': Oxford.Constantes.LEVEL.ALL},Oxford.Constantes.API.COMPUTER_VISION);
			req = Oxford.prepare(req, {Url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/2000px-W3C%C2%AE_Icon.svg.png'});
			assert.equal(true, req.data.Url == 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/2000px-W3C%C2%AE_Icon.svg.png');
		});	
		it('execute request', function(){
			var req = Oxford.create(ComputerVision, {'level': Oxford.Constantes.LEVEL.ALL},Oxford.Constantes.API.COMPUTER_VISION);
			req = Oxford.prepare(req, {Url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/2000px-W3C%C2%AE_Icon.svg.png'});
			Oxford.execute(req, function(result){
				console.log(result);
			});
		});
	});
});