/* Tick.js
 * Source: https://github.com/makesites/tick
 * Copyright © Makesites.org
 *
 * Initiated by Makis Tracend (@tracend)
 * Distributed through [Makesites.org](http://makesites.org)
 * Released under the [MIT license](http://makesites.org/licenses/MIT)
 */

(function( window ){

var Tick = function( options ){
	// merge options
	options = options || {};
	if(options.rate) this.options.rate = options.rate;
	// setup animation rate
	this.rate();
	// start loop
	this.loop();
};

Tick.prototype = {

	options: {
		rate: 1000 / 60 // standard 60fps
	},

	queue: [],

	rate: function( rate ){
		rate = rate || this.options.rate;
		// RequestAnimationFrame shim - Source: http://paulirish.com/2011/requestanimationframe-for-smart-animating/
		window.requestAnimFrame = window.requestAnimFrame || ( function( callback ) {
			return window.requestAnimationFrame ||
			window.webkitRequestAnimationFrame ||
			window.mozRequestAnimationFrame ||
			window.oRequestAnimationFrame ||
			window.msRequestAnimationFrame ||
			function ( callback ) {
				window.setTimeout( function () {
					callback(+new Date());
				}, rate );
			};
		})();

	},

	loop: function( timestamp ){

		// feature-detect if rAF and now() are of the same scale (epoch or high-res),
		// if not, we have to do a timestamp fix on each frame
		//Source: https://github.com/ded/morpheus/blob/master/src/morpheus.js#L91
		//if (fixTs) timestamp = now();

		this.process( timestamp );
		// reset loop
		window.requestAnimFrame(this.loop.bind(this)); // bind only works in > ES5
	},

	process: function( timestamp ){
		// loop through queue
		for( var i in this.queue ){
			var item = this.queue[i];
			// prerequisite
			if( typeof item.fn !== "function") continue;
			// restrict execution if not time yet
			var step = (timestamp % item.interval);
			if( step === 0 || item.run + item.interval > timestamp) continue;
			// run
			item.fn(); // context?
			// record last run
			// condition in case the item was released in the meantime...
			if( this.queue[i] ) this.queue[i].run = timestamp;
		}
	},

	// interface

	add: function( fn, interval ){
		// prerequisite
		if( typeof fn !== "function" ) return;
		// fallback
		interval = interval || this.options.rate;
		var item = {
			fn: fn,
			interval: interval,
			run: 0
		};
		this.queue.push( item );
	},

	remove: function( fn ){
		var exists = false;
		for( var i in this.queue ){
			var item = this.queue[i];
			if( String(item.fn) === String(fn) ){
				exists = true;
				delete this.queue[i];
			}
		}
		return exists;
	}

};

// save to the global namespace
window.Tick = Tick;

})( this.window );
