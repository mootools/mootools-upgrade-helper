Array.implement({

	copy: function(start, length){
		MooCompat.log('1.1 > 1.2: Array.copy is deprecated. Use Array.splice');
		return $A(this, start, length);
	},

	remove : function(item){
		MooCompat.log('1.1 > 1.2: Array.remove is deprecated. Use Array.erase');
		return this.erase(item);
	},

	merge : function(array){
		MooCompat.log('1.1 > 1.2: Array.merge is deprecated. Use Array.combine');
		return this.combine(array);
	}

});
