(function(){
	if (!window.Tips) return;

	Tips.implement({

		initialize: function(){
			MooCompat.log('1.1 > 1.2: Tips DOM element layout has changed and your CSS classes may need to change.');
			var params = Array.link(arguments, {options: Object.type, elements: $defined});
			this.setOptions(params.options);
			if (this.options.offsets) {
				MooCompat.log('1.1 > 1.2: Tips no longer have an "offsets" option; use "offset".');
				this.options.offset = this.options.offsets;
			}
			document.id(this);
			this.addEvent('show', function(){
				this.tip.addClass('tool-tip');
				this.tip.getElement('.tip-title').addClass('tool-title');
				this.tip.getElement('.tip-text').addClass('tool-text');
			});
			this.parseTitle(params.elements);
			if (params.elements) this.attach(params.elements);
		},

		parseTitle: function(elements){
			elements.each(function(element){
			var title = element.get('title');
				if (title.test('::')) {
					MooCompat.log('1.1 > 1.2: Tips no longer parse the title attribute for "::" for title/caption; use title and rel attributes instead.');
					element.store('tip:title', title.split('::')[0]);
					element.store('tip:text', title.split('::')[1]);
					element.set('title', '');
				}
			});
		}

	});

})();