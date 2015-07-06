
	var Easing = View.extend({

		el : 'body',

		options : {
			targetEl: window, // the element that will be animated
			ease: "easeFrom",
			duration: 2 // in seconds
		},

		// convert to model, maybe...
		_transitionData: {
			start: 0,
			end: 0,
			easing: false,
			startPos: 0,
			endPos: 0,
			pos: 0
		},

		initialize: function( options ) {
			_.bindAll( this, "transitionStart", "transition", "transitionEnd" );
			this.options = _.extend({}, this.options, options );
			this.tick = new Tick();
			// get the target element
			if( !this.targetEl ) {
				this.targetEl = (typeof this.options.targetEl == "string" )? $( this.options.targetEl )[0] : this.options.targetEl;
			}

			return View.prototype.initialize.call( this, options );
		},

		transitionData: function( target ){
			// variables
			var data, start, end;

			// record data
			var now = _.now();
			data = {
				start: now,
				end: now + (this.options.duration * 1000),
				easing: easing[this.options.ease],
				startPos: start,
				endPos: end,
				pos: start
			};
			//save for later
			this._transitionData = data;

			return data;
		},

		transitionPos: function( pos ){
			if( !pos ){
				// get
			} else {
				//set
			}
		},

		transitionStart: function( target ){

			this.transitionData( target );
			// add transitio in the queue
			this.tick.add( this.transition );

		},

		transition: function(){
			var now = _.now();
			var data = this._transitionData;
			// condition #1: if reached our destination...
			if( now > data.end ) return this.transitionEnd();
			// condition #2: if the position has changed by another "force"
			if( data.pos && data.pos !== this.transitionPos() ) return this.transitionEnd();

			var start = data.startPos;
			var end = data.endPos;
			var easingFunc = data.easing;
			var time = ( data.end - now ) / (this.options.duration * 1000);

			var pos = Math.round( start + ( end - start ) * (1 -easingFunc( time ) ) );

			this.transitionPos( pos );

			// save pos for later
			data.pos = pos;
			this._transitionData = data;
		},

		transitionEnd: function() {
			// remove transition
			this.tick.remove( this.transition );
			// can you stop tick.js?
		},

		// expose easing methods
		tween: function( key ){
			return easing[key];
		}

	});
