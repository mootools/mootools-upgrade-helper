Fx.Style = new Class({
	Extends: Fx.Tween,
	initialize: function(element, property, options){
		MooCompat.log('1.1 > 1.2: Fx.Style is deprecated. use Fx.Tween.');
		this.property = property;
		this.parent(element, options);
	},
	
	start: function(from, to) {
		return this.parent(this.property, from, to);
	},
	
	set: function(to) {
		return this.parent(this.property, to);
	},
	
	hide: function(){
		MooCompat.log('1.1 > 1.2: Fx.Style .hide() is deprecated; use Fx.Tween .set(0) instead');
		return this.set(0);
	}

});

Element.implement({

	effect: function(property, options){
		MooCompat.log('1.1 > 1.2: Element.effect is deprecated; use Fx.Tween or Element.tween.');
		return new Fx.Style(this, property, options);
	}

});
