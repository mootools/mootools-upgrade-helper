JSON.toString = function(obj){ 
	MooCompat.log('1.1 > 1.2: JSON.toString is deprecated. Use JSON.encode');
	return JSON.encode(obj); 
}
JSON.evaluate = function(str){
	MooCompat.log('1.1 > 1.2: JSON.evaluate is deprecated. Use JSON.decode');
	return JSON.decode(str); 
}
var Json = JSON;

