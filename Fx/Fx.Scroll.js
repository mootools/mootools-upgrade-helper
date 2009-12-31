Fx.Scroll.implement({

	scrollTo: function(y, x){
		MooTools.upgradeLog('1.1 > 1.2: Fx.Scroll\'s .scrollTo is deprecated; use .start.');
		return this.start(y, x);
	}

});