export default function() {
  /*
  *   Facade Pattern
  *
  *   Wiki: https://en.wikipedia.org/wiki/Facade_pattern
  */

  var myevent = {
    stop: function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
  };

  // Handling browser differences (you don't want to do this all over your application, so put it in one facade
  var myevent = {
    stop: function(e) {
      // Supported Browsers
      if (typeof e.preventDefault === "function") {
        e.preventDefault();
      }

      if (typeof e.stopPropagation === "function") {
        e.stopPropagation();
      }

      // IE
      if (typeof e.returnValue === "boolean") {
        e.returnValue = false;
      }

      if (typeof e.cancalBubble === "boolean") {
        e.cancalBubble = true;
      }
    }
  };






















}
