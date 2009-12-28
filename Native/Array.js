Array.implement({

    copy: function(start, length){
		MooCompat.log('Array.copy is deprecated. Use Array.splice');
        return $A(this, start, length);
    },

	remove : function(item){
		MooCompat.log('Array.remove is deprecated. Use Array.erase');
		return this.erase(item);
	},
	
	merge : function(array){
		MooCompat.log('Array.merge is deprecated. Use Array.combine');
		return this.combine(array);
	}

});
