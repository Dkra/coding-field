// Queue - FIFO

// ES6
class Queue {
  constructor{
    this.items = [];
  }

  enqueue(item) {
    return this.items.push(item);
  }

  dequeue() {
    this.items.shift();
    return this.items;
  }

  front() {
    return this.items[0];
  }
}

// ES5
// function Queue () {
//   this.items = [];
// }
//
// Queue.prototype = {
//   enqueue: function(item) {
//     return this.items.push(item);
//   },
//   dequeue: function() {
//     this.items.shift();
//     return this.items;
//   },
//   front: function() {
//     return this.items[0];
//   }
// }

var s = window.s = new Queue();

s.enqueue('a');
s.enqueue('b')
s.enqueue('c')
console.log(s);

s.dequeue();
console.log(s);
