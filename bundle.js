(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var s = window.s = new Stack();

s.push('haha');
s.push('yo');
console.log(s);

s.pop();
console.log(s);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNzQk0sSztBQUNKLG1CQUFjO0FBQUE7O0FBQ1osU0FBSyxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7OzBCQUNNO0FBQ0wsYUFBTyxLQUFLLEtBQUwsQ0FBVyxDQUFYLENBQVA7QUFDRDs7O3lCQUVLLEksRUFBTTtBQUNWLGFBQU8sS0FBSyxLQUFMLENBQVcsT0FBWCxDQUFtQixJQUFuQixDQUFQO0FBQ0Q7OzswQkFFTTtBQUNMLFVBQUksS0FBSyxLQUFMLENBQVcsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUMzQixlQUFPLEtBQUssS0FBWjtBQUNEO0FBQ0QsV0FBSyxLQUFMLENBQVcsS0FBWDtBQUNBLGFBQU8sS0FBSyxLQUFaO0FBQ0Q7Ozs7OztBQUlILElBQUksSUFBSSxPQUFPLENBQVAsR0FBVyxJQUFJLEtBQUosRUFBbkI7O0FBRUEsRUFBRSxJQUFGLENBQU8sTUFBUDtBQUNBLEVBQUUsSUFBRixDQUFPLElBQVA7QUFDQSxRQUFRLEdBQVIsQ0FBWSxDQUFaOztBQUVBLEVBQUUsR0FBRjtBQUNBLFFBQVEsR0FBUixDQUFZLENBQVoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gRVM1XG4vLyBmdW5jdGlvbiBTdGFjaygpIHtcbi8vICAgdGhpcy5pdGVtcyA9IFtdO1xuLy8gfVxuLy9cbi8vIFN0YWNrLnByb3RvdHlwZSA9IHtcbi8vICAgdG9wOiBmdW5jdGlvbigpIHtcbi8vICAgICAgIHJldHVybiB0aGlzLml0ZW1zWzBdO1xuLy8gICB9LFxuLy8gICBwdXNoOiBmdW5jdGlvbihpdGVtKSB7XG4vLyAgICAgcmV0dXJuIHRoaXMuaXRlbXMudW5zaGlmdChpdGVtKTtcbi8vICAgfSxcbi8vICAgcG9wOiBmdW5jdGlvbigpIHtcbi8vICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPT09IDApIHtcbi8vICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuLy8gICAgIH1cbi8vICAgICB0aGlzLml0ZW1zLnNoaWZ0KCk7XG4vLyAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XG4vLyAgIH1cbi8vIH1cblxuLy8gRVM2XG5jbGFzcyBTdGFjayB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaXRlbXMgPSBbXVxuICB9XG4gIHRvcCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbMF07XG4gIH1cblxuICBwdXNoIChpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMudW5zaGlmdChpdGVtKTtcbiAgfVxuXG4gIHBvcCAoKSB7XG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5pdGVtcztcbiAgICB9XG4gICAgdGhpcy5pdGVtcy5zaGlmdCgpO1xuICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICB9XG59XG5cblxudmFyIHMgPSB3aW5kb3cucyA9IG5ldyBTdGFjaygpO1xuXG5zLnB1c2goJ2hhaGEnKTtcbnMucHVzaCgneW8nKVxuY29uc29sZS5sb2cocyk7XG5cbnMucG9wKCk7XG5jb25zb2xlLmxvZyhzKTtcbiJdfQ==
