(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Macbook = function () {
	function Macbook() {
		_classCallCheck(this, Macbook);

		this.insurance = false;
		this.memory = '4G';
	}

	_createClass(Macbook, [{
		key: 'cost',
		value: function cost() {
			return 1000;
		}
	}, {
		key: 'screenSize',
		value: function screenSize() {
			return 11.6;
		}
	}]);

	return Macbook;
}();

// Decorator 1


function addMemory(macbook) {
	var price = macbook.cost();
	macbook.cost = function () {
		return price + 400;
	};
	macbook.memory = '8G';

	return macbook;
}

// Decorator 2
function addInsurance(macbook) {
	var price = macbook.cost();
	macbook.cost = function () {
		return price + 200;
	};
	macbook.insurance = true;

	return macbook;
}

var mb = new Macbook();
console.log(mb.__proto__);
console.log('mb:', mb);
console.log('mb.cost():', mb.cost());
console.log('mb.insurance:', mb.insurance);
console.log('mb.screenSize():', mb.screenSize());
console.log('---------------------');
console.log('addMemory(mb).cost():', addMemory(mb).cost());
console.log('addInsurance(mb).cost():', addInsurance(mb).cost());
console.log('mb.insurance:', mb.insurance);
console.log('mb.memory:', mb.memory);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDQU0sTztBQUNMLG9CQUFlO0FBQUE7O0FBQ2IsT0FBSyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsT0FBSyxNQUFMLEdBQWMsSUFBZDtBQUNEOzs7O3lCQUVNO0FBQ04sVUFBTyxJQUFQO0FBQ0E7OzsrQkFFWTtBQUNaLFVBQU8sSUFBUDtBQUNBOzs7Ozs7Ozs7QUFJRixTQUFTLFNBQVQsQ0FBb0IsT0FBcEIsRUFBNkI7QUFDNUIsS0FBTSxRQUFRLFFBQVEsSUFBUixFQUFkO0FBQ0EsU0FBUSxJQUFSLEdBQWU7QUFBQSxTQUFNLFFBQVEsR0FBZDtBQUFBLEVBQWY7QUFDQSxTQUFRLE1BQVIsR0FBaUIsSUFBakI7O0FBRUEsUUFBTyxPQUFQO0FBQ0E7OztBQUdELFNBQVMsWUFBVCxDQUF1QixPQUF2QixFQUFnQztBQUMvQixLQUFNLFFBQVEsUUFBUSxJQUFSLEVBQWQ7QUFDQSxTQUFRLElBQVIsR0FBZTtBQUFBLFNBQU0sUUFBUSxHQUFkO0FBQUEsRUFBZjtBQUNBLFNBQVEsU0FBUixHQUFvQixJQUFwQjs7QUFFQSxRQUFPLE9BQVA7QUFDQTs7QUFHRCxJQUFJLEtBQUssSUFBSSxPQUFKLEVBQVQ7QUFDQSxRQUFRLEdBQVIsQ0FBWSxHQUFHLFNBQWY7QUFDQSxRQUFRLEdBQVIsQ0FBWSxLQUFaLEVBQWtCLEVBQWxCO0FBQ0EsUUFBUSxHQUFSLENBQVksWUFBWixFQUEwQixHQUFHLElBQUgsRUFBMUI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEdBQUcsU0FBaEM7QUFDQSxRQUFRLEdBQVIsQ0FBWSxrQkFBWixFQUFnQyxHQUFHLFVBQUgsRUFBaEM7QUFDQSxRQUFRLEdBQVIsQ0FBWSx1QkFBWjtBQUNBLFFBQVEsR0FBUixDQUFZLHVCQUFaLEVBQXFDLFVBQVUsRUFBVixFQUFjLElBQWQsRUFBckM7QUFDQSxRQUFRLEdBQVIsQ0FBWSwwQkFBWixFQUF1QyxhQUFhLEVBQWIsRUFBaUIsSUFBakIsRUFBdkM7QUFDQSxRQUFRLEdBQVIsQ0FBWSxlQUFaLEVBQTZCLEdBQUcsU0FBaEM7QUFDQSxRQUFRLEdBQVIsQ0FBWSxZQUFaLEVBQTBCLEdBQUcsTUFBN0IiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgTWFjYm9vayB7XG5cdGNvbnN0cnVjdG9yICgpIHtcblx0XHRcdHRoaXMuaW5zdXJhbmNlID0gZmFsc2Vcblx0XHRcdHRoaXMubWVtb3J5ID0gJzRHJ1xuXHR9XG5cblx0Y29zdCgpIHtcblx0XHRyZXR1cm4gMTAwMFxuXHR9XG5cblx0c2NyZWVuU2l6ZSgpIHtcblx0XHRyZXR1cm4gMTEuNlxuXHR9XG59XG5cbi8vIERlY29yYXRvciAxXG5mdW5jdGlvbiBhZGRNZW1vcnkgKG1hY2Jvb2spIHtcblx0Y29uc3QgcHJpY2UgPSBtYWNib29rLmNvc3QoKVxuXHRtYWNib29rLmNvc3QgPSAoKSA9PiBwcmljZSArIDQwMFxuXHRtYWNib29rLm1lbW9yeSA9ICc4RydcblxuXHRyZXR1cm4gbWFjYm9va1xufVxuXG4vLyBEZWNvcmF0b3IgMlxuZnVuY3Rpb24gYWRkSW5zdXJhbmNlIChtYWNib29rKSB7XG5cdGNvbnN0IHByaWNlID0gbWFjYm9vay5jb3N0KClcblx0bWFjYm9vay5jb3N0ID0gKCkgPT4gcHJpY2UgKyAyMDBcblx0bWFjYm9vay5pbnN1cmFuY2UgPSB0cnVlXG5cblx0cmV0dXJuIG1hY2Jvb2tcbn1cblxuXG5sZXQgbWIgPSBuZXcgTWFjYm9vaygpXG5jb25zb2xlLmxvZyhtYi5fX3Byb3RvX18pO1xuY29uc29sZS5sb2coJ21iOicsbWIpO1xuY29uc29sZS5sb2coJ21iLmNvc3QoKTonLCBtYi5jb3N0KCkpO1xuY29uc29sZS5sb2coJ21iLmluc3VyYW5jZTonLCBtYi5pbnN1cmFuY2UpO1xuY29uc29sZS5sb2coJ21iLnNjcmVlblNpemUoKTonLCBtYi5zY3JlZW5TaXplKCkpO1xuY29uc29sZS5sb2coJy0tLS0tLS0tLS0tLS0tLS0tLS0tLScpO1xuY29uc29sZS5sb2coJ2FkZE1lbW9yeShtYikuY29zdCgpOicsIGFkZE1lbW9yeShtYikuY29zdCgpKTtcbmNvbnNvbGUubG9nKCdhZGRJbnN1cmFuY2UobWIpLmNvc3QoKTonLGFkZEluc3VyYW5jZShtYikuY29zdCgpKTtcbmNvbnNvbGUubG9nKCdtYi5pbnN1cmFuY2U6JywgbWIuaW5zdXJhbmNlKTtcbmNvbnNvbGUubG9nKCdtYi5tZW1vcnk6JywgbWIubWVtb3J5KTtcbiJdfQ==
