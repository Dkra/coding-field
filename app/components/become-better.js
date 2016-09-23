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

  var MacbookShopFactory = (() => {
    var privateData = new WeakMap()
    var _ = function(instance) { return privateData.get(instance) }

    class MacbookClass {
      constructor(shop, owner) {
        this.owner = owner
        this.model = '2018 late'
        this.brand = 'Apple Inc.'
        this.shop = shop
      }
    }

    class MacbookShopClass {
      constructor(location) {
        // Priviate Member
        var privateMember = { total: 100, customerList: [] } // private stock in every Macshop
        privateData.set(this, privateMember)

        // Public Member
        this.location = location
      }

      // Privileged Member
      countRemaining() {
        return `Total Macbook Remaining: ${_(this).total}` // accessed privicy members
      }

      getCustomerList() {
        return _(this).customerList // accessed privicy members
      }

      // Public Member
      displayLocation() {
        return `${this.location}`
      }

      sellAMac(customer) {
        let mac = new MacbookClass(this, customer)
        _(this).total--
        _(this).customerList.push({owner: mac.owner, shop: mac.shop})
        return mac
      }
    }

    return MacbookShopClass;
  })();

  // Create 2 Shops
  var appleShop = window.appleShop = new MacbookShopFactory('Taipei')
  var appleShop2 = window.appleShop2 = new MacbookShopFactory('Kaohsiung')

  // Sell from Taipei
  var a = window.a = appleShop.sellAMac('James')
  var b = window.b = appleShop.sellAMac('Kobe')

  // Sell from Kaohsiung
  var c = window.c = appleShop2.sellAMac('A-Rod')


  console.log('appleShop', appleShop);
  console.log('appleShop', appleShop.countRemaining());
  console.log('appleShop\'s customers list ', appleShop.getCustomerList());

  console.log('appleShop2', appleShop2);
  console.log('appleShop2', appleShop2.countRemaining());
  console.log('appleShop2\'s customers list ', appleShop2.getCustomerList());



}
