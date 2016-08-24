export default function() {
  /*
  *   Facade Pattern
  *
  *   Wiki: https://en.wikipedia.org/wiki/Facade_pattern
  *
  *   Description:
  *
  *   Provide a unified interface to a set of interfaces in a subsystem.
  *   Defines a high-level interface that makes the subsystem easier to use.
  */

  /*
    Example from JQuery v3.1.0

    Because of the code as below so that we can easily use:

    jQuery.get( url, data, callback, type )
    jQuery.post( url, data, callback, type )

    ** The code below is not executable **
  */

  jQuery.each( [ "get", "post" ], function( i, method ) {
  	jQuery[ method ] = function( url, data, callback, type ) {

  		// Shift arguments if data argument was omitted
  		if ( jQuery.isFunction( data ) ) {
  			type = type || callback;
  			callback = data;
  			data = undefined;
  		}

  		// The url can be an options object (which then must have .url)
  		return jQuery.ajax( jQuery.extend( {
  			url: url,
  			type: method,
  			dataType: type,
  			data: data,
  			success: callback
  		}, jQuery.isPlainObject( url ) && url ) );
  	};
  }





















}
