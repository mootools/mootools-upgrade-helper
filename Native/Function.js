Function.extend({

	bindAsEventListener: function(bind, args){
		MooCompat.log('1.1 > 1.2: Function.bindAsEventListener is deprecated. Use bindWithEvent.');
		return this.bindWithEvent.call(this, bind, args);
	}

});

Function.empty = function(){
	MooCompat.log('1.1 > 1.2: Function.empty is now just $empty.');
};