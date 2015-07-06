/**
 * @name {{name}}
 * {{description}}
 *
 * Version: {{version}} ({{build_date}})
 * Source: {{repository}}
 *
 * @author {{author}}
 * Initiated by: Makis Tracend (@tracend)
 * Distributed through [Makesites.org](http://makesites.org)
 *
 * @cc_on Copyright © Makesites.org
 * @license Released under the [{{license}} license](http://makesites.org/licenses/{{license}})
 */

(function (lib) {

	//"use strict";

	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		var deps = ['jquery', 'underscore', 'backbone']; // condition when backbone.app is part of the array?
		define('backbone.easing', deps, lib);
	} else if ( typeof module === "object" && module && typeof module.exports === "object" ){
		// Expose as module.exports in loaders that implement CommonJS module pattern.
		module.exports = lib;
	} else {
		// Browser globals
		var Query = $ || jQuery || Zepto || vQuery;
		lib(Query, _, Backbone);
	}
}(function ($, _, Backbone) {

	// support for Backbone APP() view if available...
	var APP = APP || window.APP || false;
	var isAPP = ( APP !== false );
	var View = ( isAPP && typeof APP.View !== "undefined" ) ? APP.View : Backbone.View;



{{{lib}}}



	// update Backbone namespace regardless
	Backbone.Easing = Easing;
	if( isAPP ){
		APP.Easing = Easing;
	}

	// If there is a window object, that at least has a document property
	if ( typeof window === "object" && typeof window.document === "object" ) {
		window.Backbone = Backbone;
		// update APP namespace
		if( isAPP ){
			window.APP = APP;
		}
	}

	// for module loaders:
	return Easing;

}));
