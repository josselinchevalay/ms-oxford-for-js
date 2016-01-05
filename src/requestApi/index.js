var _ = require('lodash');
var rp = require('request-promise');
var constantes = require('../constantes');
var requestComputerVision    = require('./computerVision.js');


/**
 * create
 */
 function create(key, params, api){
   switch (api){
     case constantes.API.COMPUTER_VISION :
        return _.extend({api:api, url_api:constantes.URL.COMPUTER_VISION}, new requestComputerVision.create(key, params));
   }
 }
 
/**
 * prepare
*/
function prepare(request, data){
   switch (request.api){
    case constantes.API.COMPUTER_VISION :
        return requestComputerVision.prepare(request, data);
   }
}
  
/**
 * execute
 */
function execute(request, callback){
    var options = {
    url : request.url_api,
    method : request.method,
    headers: {
        'content-type'              : 'application/json',
        'Ocp-Apim-Subscription-Key' : request.key
    },
    qs : request.params,
    body: request.data,
    json: true            
    };
    rp(options)
    .then(callback)
    .catch(callback);
}

module.exports = {
	create :  create,
	prepare: prepare,
	execute: execute
};