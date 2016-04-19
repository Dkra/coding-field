// Revealing Module Pattern

/*

- Advantages

This pattern allows the syntax of our scripts to be more consistent. It also makes it more clear at the end of the module which of our functions and variables may be accessed publicly which eases readability.

- Disadvantages

A disadvantage of this pattern is that if a private function refers to a public function, that public function can't be overridden if a patch is necessary. This is because the private function will continue to refer to the private implementation and the pattern doesn't apply to public members, only to functions.

Public object members which refer to private variables are also subject to the no-patch rule notes above.

As a result of this, modules created with the Revealing Module pattern may be more fragile than those created with the original Module pattern, so care should be taken during usage.

*/

var car = (function() {
  var privateTotalMile = 0,
      publicLastMile = 0;

  var privateMethod = function() {
    console.log('private method');
  }

  var publicShowLastMile = function() {
    console.log(publicLastMile);
  }
  var publicShowMile = function() {
    console.log(privateTotalMile);
  };

  var publicDrive = function(mile) {
    publicLastMile = mile;
    privateTotalMile += mile;
    console.log(publicLastMile);
  };


  // Reveal public pointers to
  // private functions and properties

  return {
    lastDrive: publicShowLastMile,
    showTotal: publicShowMile,
    drive:  publicDrive
  };

})();

car.drive(100);
car.drive(50);
var b = car.lastDrive();

car.showTotal();
