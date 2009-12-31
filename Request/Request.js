var XHR = new Class({

	Extends: Request,

	options: {
		update: false
	},

	initialize: function(options){
		MooTools.upgradeLog('1.1 > 1.2: XHR is deprecated. Use Request.');
		this.parent(options);
		this.transport = this.xhr;
	},

	request: function(data){
		MooTools.upgradeLog('1.1 > 1.2: XHR.request() is deprecated. Use Request.send() instead.');
		return this.send(this.url, data || this.options.data);
	},

	send: function(url, data){
		if (!this.check(arguments.callee, url, data)) return this;
		return this.parent({url: url, data: data});
	},

	success: function(text, xml){
		text = this.processScripts(text);
		if (this.options.update) $(this.options.update).empty().set('html', text);
		this.onSuccess(text, xml);
	},

	failure: function(){
		this.fireEvent('failure', this.xhr);
	}

});


var Ajax = new Class({

	Extends: XHR,

	initialize: function(url, options){
		MooTools.upgradeLog('1.1 > 1.2: Ajax is deprecated. Use Request.');
		this.url = url;
		this.parent(options);
	},

	success: function(text, xml){
		// This version processes scripts *after* the update element is updated, like Mootools 1.1's Ajax class
		// Partially from Remote.Ajax.success
		this.processScripts(text);
		response = this.response;
		response.html = text.stripScripts(function(script){
				response.javascript = script;
		});
		if (this.options.update) $(this.options.update).empty().set('html', response.html);
		if (this.options.evalScripts) $exec(response.javascript);
		this.onSuccess(text, xml);
	}

});

(function(){
	var send = Element.prototype.send;
	Element.implement({
		send: function(url) {
			if ($type(url) == "string") return send.apply(this, arguments);
			if ($type(url) == "object") {
				MooTools.upgradeLog('1.1 > 1.2: Element.send no longer takes an options argument as its object but rather a url. See docs.');
				this.set('send', url);
				send.call(this);
			}
			return this;
		}
	});
})();