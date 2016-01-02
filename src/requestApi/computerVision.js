var request = require('./index.js');


module.exports = {
	create : function(key, requestParams){
		this.method = 'POST'
		this.key = key;
		this.params = {'visualFeatures': requestParams.level};
		return this;	
	},
	prepare : function(request, data){
		request.data = {Url:data.Url};
		return request;
	}
}