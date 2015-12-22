var RequestApi = function(){};


/**
 * create
 */
 function create(key, api){
	 return new RequestApi();
 }
 
 /**
  * prepare
  */
  function prepare(request, data){
	  return request;
  }
  
  /**
   * execute
   */
   function execute(request, callback){
	   
   }

module.exports = {
	Request : RequestApi,
	create :  create,
	prepare: prepare,
	execute: execute
};