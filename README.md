Microsoft Oxford client for Javascript
======================================

h1. Install

```
npm install ms-oxford-js
```

OR 

```
bower instal ms-oxford-js
```

h1. Use

h2. Computer vision

```
var params = {
	'level' : Oxford.Constantes.LEVEL.FACES // define a visual features you need
};
var request = Oxford.create("<your-key>", params, Oxford.Constantes.API.COMPUTER_VISISON);
request
	.prepare(request, {
		url : "https://ma-super-imabe.jpg"
	})
	.excute(reuqest, function(result) {});
```