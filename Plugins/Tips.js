(function(){

	Tips.implement({

		initialize: function(){
			var params = Array.link(arguments, {options: Object.type, elements: $defined});
			this.setOptions(params.options);
			if (this.options.offsets) this.options.offset = this.options.offsets;
			document.id(this);
			this.parseTitle(params.elements);
			if (params.elements) this.attach(params.elements);
		},

		parseTitle: function(elements){
			elements.each(function(element){
			var title = element.get('title');
				if (title.test('::')) {
					element.store('tip:title', title.split('::')[0]);
					element.store('tip:text', title.split('::')[1]);
					element.set('title', '');
				}
			});
		}

	});

})();