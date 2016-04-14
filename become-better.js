// Singleton Pattern //

// restricts instantiation of a class to a single object.

var Singleton = (function() {

  var instance;

  function Init (config) {
    this.name = config.name || "Roger";
    this.sayHi = function () {
      console.log(`Hi, I'm #{this.name}`);
    }
  }

  return {
    getInstance: function (config) {
      if ( !instance ) {
        instance = new Init(config);
      }

      return instance;
    }
  }

})();

var a = Singleton.getInstance({name: 'Kobe'});
var b = Singleton.getInstance();
console.log(a);
console.log(b);
console.log(a === b);
