Function.extend({

	bindAsEventListener: function(bind, args){
		MooCompat.log('Function.bindAsEventListener is deprecated.');
		return this.create({'bind': bind, 'event': true, 'arguments': args});
	}

});

Function.empty = function(){
	MooCompat.log('1.1 > 1.2: Function.empty is now just $empty.');
};