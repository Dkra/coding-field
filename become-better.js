// The Module Pattern

// only a public API is returned, keeping everything else within the closure private.


// Example 1

var basket = (function() {
  // private varialbe
  var list = [],
      total = 0;

  // public methods
  return {
    addItem: function(item) {
      list.push(item);
    },
    totalPrice: function() {
      list.forEach(function(obj){
        console.log(obj);
        total = total + obj.price * obj.amount;
      });
      return total;
    },
    showList: function() {
      return list;
    }
  };

})();


basket.addItem({
  name: 'apple',
  amount: 1,
  price: 10
});

basket.addItem({
  name: 'kiwi',
  amount: 3,
  price: 20
});

console.log(basket.showList());
console.log(basket.totalPrice());
