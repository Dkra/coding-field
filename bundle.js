(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Queue - FIFO

// ES5
function Queue() {
  this.items = [];
}

Queue.prototype = {
  enqueue: function enqueue(item) {
    return this.items.push(item);
  },
  dequeue: function dequeue() {
    this.items.shift();
    return this.items;
  },
  front: function front() {
    return this.items[0];
  }
};

var s = window.s = new Queue();

s.enqueue('a');
s.enqueue('b');
s.enqueue('c');
console.log(s);

s.dequeue();
console.log(s);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNHQSxTQUFTLEtBQVQsR0FBa0I7QUFDaEIsT0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNEOztBQUVELE1BQU0sU0FBTixHQUFrQjtBQUNoQixXQUFTLGlCQUFTLElBQVQsRUFBZTtBQUN0QixXQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZ0IsSUFBaEIsQ0FBUDtBQUNELEdBSGU7QUFJaEIsV0FBUyxtQkFBVztBQUNsQixTQUFLLEtBQUwsQ0FBVyxLQUFYO0FBQ0EsV0FBTyxLQUFLLEtBQVo7QUFDRCxHQVBlO0FBUWhCLFNBQU8saUJBQVc7QUFDaEIsV0FBTyxLQUFLLEtBQUwsQ0FBVyxDQUFYLENBQVA7QUFDRDtBQVZlLENBQWxCOztBQWVBLElBQUksSUFBSSxPQUFPLENBQVAsR0FBVyxJQUFJLEtBQUosRUFBbkI7O0FBRUEsRUFBRSxPQUFGLENBQVUsR0FBVjtBQUNBLEVBQUUsT0FBRixDQUFVLEdBQVY7QUFDQSxFQUFFLE9BQUYsQ0FBVSxHQUFWO0FBQ0EsUUFBUSxHQUFSLENBQVksQ0FBWjs7QUFFQSxFQUFFLE9BQUY7QUFDQSxRQUFRLEdBQVIsQ0FBWSxDQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFF1ZXVlIC0gRklGT1xuXG4vLyBFUzVcbmZ1bmN0aW9uIFF1ZXVlICgpIHtcbiAgdGhpcy5pdGVtcyA9IFtdO1xufVxuXG5RdWV1ZS5wcm90b3R5cGUgPSB7XG4gIGVucXVldWU6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICB9LFxuICBkZXF1ZXVlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLml0ZW1zLnNoaWZ0KCk7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4gIH0sXG4gIGZyb250OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1swXTtcbiAgfVxufVxuXG5cblxudmFyIHMgPSB3aW5kb3cucyA9IG5ldyBRdWV1ZSgpO1xuXG5zLmVucXVldWUoJ2EnKTtcbnMuZW5xdWV1ZSgnYicpXG5zLmVucXVldWUoJ2MnKVxuY29uc29sZS5sb2cocyk7XG5cbnMuZGVxdWV1ZSgpO1xuY29uc29sZS5sb2cocyk7XG4iXX0=
