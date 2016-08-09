(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Stack - LIFO

// ES6

var Stack = function () {
  function Stack() {
    _classCallCheck(this, Stack);

    this.items = [];
  }

  _createClass(Stack, [{
    key: 'top',
    value: function top() {
      return this.items[0];
    }
  }, {
    key: 'push',
    value: function push(item) {
      return this.items.unshift(item);
    }
  }, {
    key: 'pop',
    value: function pop() {
      if (this.items.length === 0) {
        return this.items;
      }
      this.items.shift();
      return this.items;
    }
  }]);

  return Stack;
}();

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
s.push('yo');
console.log(s);

s.pop();
console.log(s);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQ0dNLEs7QUFDSixtQkFBYztBQUFBOztBQUNaLFNBQUssS0FBTCxHQUFhLEVBQWI7QUFDRDs7OzswQkFDTTtBQUNMLGFBQU8sS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFQO0FBQ0Q7Ozt5QkFFSyxJLEVBQU07QUFDVixhQUFPLEtBQUssS0FBTCxDQUFXLE9BQVgsQ0FBbUIsSUFBbkIsQ0FBUDtBQUNEOzs7MEJBRU07QUFDTCxVQUFJLEtBQUssS0FBTCxDQUFXLE1BQVgsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDM0IsZUFBTyxLQUFLLEtBQVo7QUFDRDtBQUNELFdBQUssS0FBTCxDQUFXLEtBQVg7QUFDQSxhQUFPLEtBQUssS0FBWjtBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkgsSUFBSSxJQUFJLE9BQU8sQ0FBUCxHQUFXLElBQUksS0FBSixFQUFuQjs7QUFFQSxFQUFFLElBQUYsQ0FBTyxNQUFQO0FBQ0EsRUFBRSxJQUFGLENBQU8sSUFBUDtBQUNBLFFBQVEsR0FBUixDQUFZLENBQVo7O0FBRUEsRUFBRSxHQUFGO0FBQ0EsUUFBUSxHQUFSLENBQVksQ0FBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBTdGFjayAtIExJRk9cblxuLy8gRVM2XG5jbGFzcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuICB9XG4gIHRvcCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbMF07XG4gIH1cblxuICBwdXNoIChpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMudW5zaGlmdChpdGVtKTtcbiAgfVxuXG4gIHBvcCAoKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5zaGlmdCgpO1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9XG59XG5cbi8vIEVTNVxuLy8gZnVuY3Rpb24gU3RhY2soKSB7XG4vLyAgIHRoaXMuaXRlbXMgPSBbXTtcbi8vIH1cbi8vXG4vLyBTdGFjay5wcm90b3R5cGUgPSB7XG4vLyAgIHRvcDogZnVuY3Rpb24oKSB7XG4vLyAgICAgICByZXR1cm4gdGhpcy5pdGVtc1swXTtcbi8vICAgfSxcbi8vICAgcHVzaDogZnVuY3Rpb24oaXRlbSkge1xuLy8gICAgIHJldHVybiB0aGlzLml0ZW1zLnVuc2hpZnQoaXRlbSk7XG4vLyAgIH0sXG4vLyAgIHBvcDogZnVuY3Rpb24oKSB7XG4vLyAgICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4vLyAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcbi8vICAgICB9XG4vLyAgICAgdGhpcy5pdGVtcy5zaGlmdCgpO1xuLy8gICAgIHJldHVybiB0aGlzLml0ZW1zO1xuLy8gICB9XG4vLyB9XG5cbnZhciBzID0gd2luZG93LnMgPSBuZXcgU3RhY2soKTtcblxucy5wdXNoKCdoYWhhJyk7XG5zLnB1c2goJ3lvJylcbmNvbnNvbGUubG9nKHMpO1xuXG5zLnBvcCgpO1xuY29uc29sZS5sb2cocyk7XG4iXX0=
