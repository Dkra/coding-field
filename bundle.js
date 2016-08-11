(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

/*
// Interator [key, key]
var mySet = window.s =  new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet);
console.log('------------------------------');

// Interator [key, value]
var map = window.m = new Map();

map.set('Gandalf', 'gandalf@email.com');
map.set('John', 'johnsnow@email.com');
map.set('Tyrion', 'tyrion@email.com');
console.log(map);
console.log(map.has('Gandalf'));   //outputs true
console.log(map.size);   //outputs 3
console.log(map.keys()); //outputs ["Gandalf", "John", "Tyrion"]
console.log(map.values()); //outputs ["gandalf@email.com", "johnsnow@email.com", "tyrion@email.com"]
console.log(map.get('Tyrion')); //outputs tyrion@email.com
*/

var myWeakSet = window.ws = new WeakSet();
var key1 = window.key1 = { name: 'roger' };
var key2 = { name: 'ning' };
myWeakSet.add(key1, 'boy');
myWeakSet.add(key2, 'girl');

console.log(myWeakSet);
console.log('------------------------------');

// const myWeakMap = window.wm = new WeakMap()
// const key1 = window.key1 = {name: 'roger'}
// const key2 = window.key2 = {name: 'ning'}
// myWeakMap.set(key1, 'boy');
// myWeakMap.set(key2, 'girl');
//
// console.log(myWeakMap);
// console.log('------------------------------');

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeUJBLElBQU0sWUFBWSxPQUFPLEVBQVAsR0FBWSxJQUFJLE9BQUosRUFBOUI7QUFDQSxJQUFNLE9BQU8sT0FBTyxJQUFQLEdBQWMsRUFBQyxNQUFNLE9BQVAsRUFBM0I7QUFDQSxJQUFNLE9BQU8sRUFBQyxNQUFNLE1BQVAsRUFBYjtBQUNBLFVBQVUsR0FBVixDQUFjLElBQWQsRUFBb0IsS0FBcEI7QUFDQSxVQUFVLEdBQVYsQ0FBYyxJQUFkLEVBQW9CLE1BQXBCOztBQUVBLFFBQVEsR0FBUixDQUFZLFNBQVo7QUFDQSxRQUFRLEdBQVIsQ0FBWSxnQ0FBWiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKlxuLy8gSW50ZXJhdG9yIFtrZXksIGtleV1cbnZhciBteVNldCA9IHdpbmRvdy5zID0gIG5ldyBTZXQoKTtcblxubXlTZXQuYWRkKDEpO1xubXlTZXQuYWRkKDUpO1xubXlTZXQuYWRkKFwic29tZSB0ZXh0XCIpO1xuXG5jb25zb2xlLmxvZyhteVNldCk7XG5jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbi8vIEludGVyYXRvciBba2V5LCB2YWx1ZV1cbnZhciBtYXAgPSB3aW5kb3cubSA9IG5ldyBNYXAoKTtcblxubWFwLnNldCgnR2FuZGFsZicsICdnYW5kYWxmQGVtYWlsLmNvbScpO1xubWFwLnNldCgnSm9obicsICdqb2huc25vd0BlbWFpbC5jb20nKTtcbm1hcC5zZXQoJ1R5cmlvbicsICd0eXJpb25AZW1haWwuY29tJyk7XG5jb25zb2xlLmxvZyhtYXApO1xuY29uc29sZS5sb2cobWFwLmhhcygnR2FuZGFsZicpKTsgICAvL291dHB1dHMgdHJ1ZVxuY29uc29sZS5sb2cobWFwLnNpemUpOyAgIC8vb3V0cHV0cyAzXG5jb25zb2xlLmxvZyhtYXAua2V5cygpKTsgLy9vdXRwdXRzIFtcIkdhbmRhbGZcIiwgXCJKb2huXCIsIFwiVHlyaW9uXCJdXG5jb25zb2xlLmxvZyhtYXAudmFsdWVzKCkpOyAvL291dHB1dHMgW1wiZ2FuZGFsZkBlbWFpbC5jb21cIiwgXCJqb2huc25vd0BlbWFpbC5jb21cIiwgXCJ0eXJpb25AZW1haWwuY29tXCJdXG5jb25zb2xlLmxvZyhtYXAuZ2V0KCdUeXJpb24nKSk7IC8vb3V0cHV0cyB0eXJpb25AZW1haWwuY29tXG4qL1xuXG5jb25zdCBteVdlYWtTZXQgPSB3aW5kb3cud3MgPSBuZXcgV2Vha1NldCgpXG5jb25zdCBrZXkxID0gd2luZG93LmtleTEgPSB7bmFtZTogJ3JvZ2VyJ31cbmNvbnN0IGtleTIgPSB7bmFtZTogJ25pbmcnfVxubXlXZWFrU2V0LmFkZChrZXkxLCAnYm95Jyk7XG5teVdlYWtTZXQuYWRkKGtleTIsICdnaXJsJyk7XG5cbmNvbnNvbGUubG9nKG15V2Vha1NldCk7XG5jb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG5cbi8vIGNvbnN0IG15V2Vha01hcCA9IHdpbmRvdy53bSA9IG5ldyBXZWFrTWFwKClcbi8vIGNvbnN0IGtleTEgPSB3aW5kb3cua2V5MSA9IHtuYW1lOiAncm9nZXInfVxuLy8gY29uc3Qga2V5MiA9IHdpbmRvdy5rZXkyID0ge25hbWU6ICduaW5nJ31cbi8vIG15V2Vha01hcC5zZXQoa2V5MSwgJ2JveScpO1xuLy8gbXlXZWFrTWFwLnNldChrZXkyLCAnZ2lybCcpO1xuLy9cbi8vIGNvbnNvbGUubG9nKG15V2Vha01hcCk7XG4vLyBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tJyk7XG4iXX0=
