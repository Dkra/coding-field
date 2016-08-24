export default function() {
  /*
  *   Adapter Pattern
  *
  *   Wiki: https://en.wikipedia.org/wiki/Adapter_pattern
  *
  *   Description:
  *
  *   The primary function of an Adapter is to produce a unified interface for a number of underlying and unrelated objects.
  *
  *   e.g: Ruby ORM - a unified interface as part of its API but the code underneath the interface is able to communicate with many different types of databases
  */

  var myevent = {
    stop: function(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Handling browser differences
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
