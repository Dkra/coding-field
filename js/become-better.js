// Stack - LIFO

// ES6
class Stack {
  constructor() {
    this.items = []
  }
  top () {
    return this.items[0];
  }

  push (item) {
    return this.items.unshift(item);
  }

  pop () {
    if (this.items.length === 0) {
      return this.items;
    }
    this.items.shift();
    return this.items;
  }
}

// ES5
// function Stack() {
//   this.items = [];
// }
//
// Stack.prototype = {
//   top: function() {
//       return this.items[0];
//   },
//   push: function(item) {
//     return this.items.unshift(item);
//   },
//   pop: function() {
//     if (this.items.length === 0) {
//       return this.items;
//     }
//     this.items.shift();
//     return this.items;
//   }
// }

var s = window.s = new Stack();

s.push('haha');
s.push('yo')
console.log(s);

s.pop();
console.log(s);
