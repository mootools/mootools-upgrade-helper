
Cookie.set = function(key, value, options){
	MooCompat.log('Cookie.set is deprecated. Use Cookie.write');
    return new Cookie(key, options).write(value);
};

Cookie.get = function(key){
	MooCompat.log('Cookie.get is deprecated. Use Cookie.read');
    return new Cookie(key).read();
};

Cookie.remove = function(key, options){
	MooCompat.log('Cookie.remove is deprecated. Use Cookie.dispose');
    return new Cookie(key, options).dispose();
};
