/**
 * @name {{name}}
 * {{description}}
 *
 * Version: {{version}} ({{build_date}})
 * Source: {{repository}}
 *
 * @author {{author}}
 * Initiated by: Makis Tracend (@tracend)
 *
 * @cc_on Copyright © Makesites.org
 * @license {{#license licenses}}{{/license}}
 */

(function(window, $, _, Backbone, APP) {

	// support for Backbone APP() view if available...
	var isAPP = ( typeof APP !== "undefined" && typeof APP.View !== "undefined" );
	var View = ( isAPP ) ? APP.View : Backbone.View;



{{{lib}}}



	// Support module loaders
	if ( typeof module === "object" && module && typeof module.exports === "object" ) {
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = Easing;
	} else {
		// Register as a named AMD module, used in Require.js
		if ( typeof define === "function" && define.amd ) {
			define("backbone.easing", ['jquery', 'underscore', 'backbone'], function () { return Easing; } );
		}
	}
	// If there is a window object, that at least has a document property
	if ( typeof window === "object" && typeof window.document === "object" ) {
		// update APP namespace
		if( isAPP ){
			APP.Easing = Easing;
			// save namespace
			window.APP = APP;
		}
		// update Backbone namespace regardless
		Backbone.Easing = Easing;
		window.Backbone = Backbone;
	}


})(this.window, this.$, this._, this.Backbone, this.APP);
