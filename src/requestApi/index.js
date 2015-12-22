var _ = require('lodash');
var constantes = require('../constantes');
var requestComputerVision    = require('./computerVision.js');


/**
 * create
 */
 function create(key, params, api){
	 switch (api){
     case constantes.API.COMPUTER_VISION :
        return _.extend({api:api, url_api:constantes.URL.COMPUTER_VISION}, new requestComputerVision.create(key, params));
      break;
   };
 }
 
 /**
  * prepare
  */
  function prepare(request, data){
	  switch (request.api){
      case constantes.API.COMPUTER_VISION :
        return requestComputerVision.prepare(request, data);
      break;
    }
  }
  
  /**
   * execute
   */
   function execute(request, callback){
	   
   }

module.exports = {
	create :  create,
	prepare: prepare,
	execute: execute
};