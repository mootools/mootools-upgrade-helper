JSON.toString = function(obj){ 
	MooTools.upgradeLog('1.1 > 1.2: JSON.toString is deprecated. Use JSON.encode');
	return JSON.encode(obj); 
}
JSON.evaluate = function(str){
	MooTools.upgradeLog('1.1 > 1.2: JSON.evaluate is deprecated. Use JSON.decode');
	return JSON.decode(str); 
}
var Json = JSON;

