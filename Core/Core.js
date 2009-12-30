if(!window.console) var console = {};
if(!console.log) console.log = function(){};
if(!console.warn) console.warn = console.log;
if(!console.error) console.error = console.warn;

var MooCompat = {
	log: function() {
		if (console[this.logging]) console[this.logging].apply(console, arguments);
	},
	logging: 'warn'
};

(function(){
	oldA = $A;
	window.$A = function(iterable, start, length){
		if (start != undefined && length != undefined) {
			MooCompat.log('1.1 > 1.2: $A no longer takes start and length arguments.');
			if (Browser.Engine.trident && $type(iterable) == 'collection'){
				start = start || 0;
				if (start < 0) start = iterable.length + start;
				length = length || (iterable.length - start);
				var array = [];
				for (var i = 0; i < length; i++) array[i] = iterable[start++];
				return array;
			}
			start = (start || 0) + ((start < 0) ? iterable.length : 0);
			var end = ((!$chk(length)) ? iterable.length : length) + start;
			return Array.prototype.slice.call(iterable, start, end);
		}
		return oldA(iterable);
	};


	var strs = ['Array', 'Function', 'String', 'RegExp', 'Number', 'Window', 'Document', 'Element', 'Elements'];
	for (var i = 0, l = strs.length; i < l; i++) {
		var type = strs[i];
		var natv = window[type];
		if (natv) {
			var extend = natv.extend;
			natv.extend = function(props){
				MooCompat.log('1.1 > 1.2: native types no longer use .extend to add methods to prototypes but instead use .implement. NOTE: YOUR METHODS WERE NOT IMPLEMENTED ON THE NATIVE ' + type.toUpperCase() + ' PROTOTYPE.');
				return extend.apply(this, arguments);
			};
		}
	}
})();