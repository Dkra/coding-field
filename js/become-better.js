// CLASS - Set
// Interator [key, key]
var mySet = window.s =  new Set();

mySet.add(1);
mySet.add(5);
mySet.add("some text");

console.log(mySet);
console.log('------------------------------');

// CLASS - Map
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

console.log('------------------------------');

/*
 *  WeakSet & WeakMap only accept object as key
 */

// CLASS - WeakSet
const myWeakSet = window.ws = new WeakSet()
const key1 = window.key1 = {name: 'roger'}
const key2 = {name: 'ning'}
myWeakSet.add(key1, 'boy');
myWeakSet.add(key2, 'girl');

console.log(myWeakSet);
console.log('------------------------------');

// CLASS - WeakMap
const myWeakMap = window.wm = new WeakMap()
const key1 = window.key1 = {name: 'roger'}
const key2 = window.key2 = {name: 'ning'}
myWeakMap.set(key1, 'boy');
myWeakMap.set(key2, 'girl');

console.log(myWeakMap);
console.log('------------------------------');
