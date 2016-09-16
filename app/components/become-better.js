export default function() {
  'use strict'
  /*
  *   Become Better from here
  */

  /*
  *   Privacy levels
  *
  *   private members - Members that cannot be publicly accessed
  *   public members -  Members do not use private members and that can be publicly accessed
  *   privileged members - Members that use private members and that can be publicly accessed
  */

  var MacbookFactory = (() => {
    var privateData = new WeakMap()
    var _ = function(instance) { return privateData.get(instance) }

    class MacbookFactoryClass {
      constructor() {
        // Priviate Member
        var privateMember = { total: 100 }

        privateMember.total--;
        privateData.set(this, privateMember)

        // Public Member
        this.brand = 'Apple'
      }



      // Privileged Member
      countRemaining() {
        console.log(this === window.myMac);
        return `Total Macbook Remaining: ${_(this).total}` // accessed privicy members
      }

      // Public Member
      displayBrand() {
        return `${this.brand} Inc.`
      }
    }

    return MacbookFactoryClass;
  })();

  var myMac = window.myMac = new MacbookFactory()
  console.log('myMac', myMac);
  console.log(
  myMac.countRemaining()
  );


  
}
