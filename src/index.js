var constantes = require('./constantes');
var requestApi = require('./requestApi');

module.exports = {
	Constantes 		: constantes,
	Request 		: requestApi.Request,
	create 	: requestApi.create,
	prepare : requestApi.prepare,
	execute : requestApi.excute
};
 
 
 