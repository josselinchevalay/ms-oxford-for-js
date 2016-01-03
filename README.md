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

other example

```
var key = process.env.OXFORD_COMPUTE_VISION_KEY;


var req = Oxford.create(key, {'level': Oxford.Constantes.LEVEL.ALL},Oxford.Constantes.API.COMPUTER_VISION);
req = Oxford.prepare(req, {Url:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/W3C%C2%AE_Icon.svg/2000px-W3C%C2%AE_Icon.svg.png'});

Oxford.execute(req, function(result){
	console.log(result);
}); 
```

h2. Enviroment variable for test

```
OXFORD_COMPUTE_VISION_KEY = "" ; // fey for compute vision