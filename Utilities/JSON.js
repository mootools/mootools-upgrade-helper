
JSON.toString = function(obj){ 
	MooCompat.log('JSON.toString is deprecated. Use JSON.encode');
	return JSON.encode(obj); 
}
JSON.evaluate = function(str){
	MooCompat.log('JSON.evaluate is deprecated. Use JSON.decode');
	return JSON.decode(str); 
}
var Json = JSON;

