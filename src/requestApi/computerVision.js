var request = require('./index.js');


module.exports = {
	create : function(key, requestParams){
		this.key = key;
		this.requestParams = {'visualFeatures': requestParams.level};
		return this;	
	},
	prepare : function(request, data){
		request.data = {url:data.url};
		return request;
	}
}