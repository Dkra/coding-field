(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Class - Binray Search Tree

var BinarySearchTree = function BinarySearchTree() {
  _classCallCheck(this, BinarySearchTree);

  var Node = function Node(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  };

  var _root = null;
  var _insertNode = function _insertNode(node, newNode) {
    if (newNode.key < node.key) {

      if (node.left === null) {
        node.left = newNode;
      } else {
        _insertNode(node.left, newNode);
      }
    } else {

      if (node.right === null) {
        node.right = newNode;
      } else {
        _insertNode(node.right, newNode);
      }
    }
  };

  var inOrderTraverseNode = function inOrderTraverseNode(node, cb) {
    if (node !== null) {
      inOrderTraverseNode(node.left, cb);
      cb(node.key);
      inOrderTraverseNode(node.right, cb);
    }
  };

  var preOrderTraverseNode = function preOrderTraverseNode(node, cb) {
    if (node !== null) {
      cb(node.key);
      preOrderTraverseNode(node.left, cb);
      preOrderTraverseNode(node.right, cb);
    }
  };

  var postOrderTraverseNode = function postOrderTraverseNode(node, cb) {
    if (node !== null) {
      postOrderTraverseNode(node.left, cb);
      postOrderTraverseNode(node.right, cb);
      cb(node.key);
    }
  };

  var maxNode = function maxNode(node, cb) {
    if (node.right !== null) {
      maxNode(node.right, cb);
    } else {
      cb(node.key);
    }
  };

  var minNode = function minNode(node, cb) {
    if (node.left !== null) {
      minNode(node.left, cb);
    } else {
      cb(node.key);
    }
  };

  var findMinNode = function findMinNode(node) {
    while (node && node.left !== null) {
      node = node.left;
    }
    return node;
  };

  var searchNode = function searchNode(node, key) {
    if (node === null) {
      return false;
    } else if (key === node.key) {
      return true;
    } else if (key > node.key) {
      return searchNode(node.right, key);
    } else {
      return searchNode(node.left, key);
    }
  };

  var removeNode = function removeNode(node, key) {
    if (node === null) return null;

    if (key < node.key) {
      node.left = removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = removeNode(node.right, key);
      return node;
    } else {
      // Key equals node.key
      // 1. leaf node
      if (node.left === null && node.right === null) {
        return null;
      }

      // 2. node with 1 child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      // 3. node with 2 child
      var rightMinNode = findMinNode(node.right);
      node.key = rightMinNode.key;
      node.right = removeNode(node.right, rightMinNode.key);
      return node;
    }
  };

  this.remove = function (key) {
    return removeNode(_root, key);
  };

  this.search = function (key) {
    return searchNode(_root, key);
  };

  this.min = function (cb) {
    return minNode(_root, cb);
  };

  this.max = function (cb) {
    return maxNode(_root, cb);
  };

  this.insert = function (key) {
    var newNode = new Node(key);

    if (_root === null) {
      _root = newNode;
    } else {
      _insertNode(_root, newNode);
    }
  };

  this.inOrderTraverse = function (cb) {
    inOrderTraverseNode(_root, cb);
  };

  this.preOrderTraverse = function (cb) {
    preOrderTraverseNode(_root, cb);
  };

  this.postOrderTraverse = function (cb) {
    postOrderTraverseNode(_root, cb);
  };

  this.tree = function () {
    return _root;
  };
};

var bst = window.bst = new BinarySearchTree();
bst.insert(11);

bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);
bst.insert(6);
console.log(bst);
function printNode(value) {
  console.log(value);
}
bst.inOrderTraverse(printNode);
console.log('--------');
bst.preOrderTraverse(printNode);
console.log('--------');
bst.postOrderTraverse(printNode);
console.log('-----Find Max-------');
bst.max(printNode);
console.log('-----Find Min-------');
bst.min(printNode);
console.log('-----Search For-------');
console.log(bst.search(99));

bst.remove(15);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0lDRU0sZ0IsR0FDSiw0QkFBYztBQUFBOztBQUNaLE1BQUksT0FBTyxTQUFQLElBQU8sQ0FBUyxHQUFULEVBQWM7QUFDdkIsU0FBSyxHQUFMLEdBQVcsR0FBWDtBQUNBLFNBQUssSUFBTCxHQUFZLElBQVo7QUFDQSxTQUFLLEtBQUwsR0FBYSxJQUFiO0FBQ0QsR0FKRDs7QUFNQSxNQUFJLFFBQVEsSUFBWjtBQUNBLE1BQUksY0FBYyxTQUFkLFdBQWMsQ0FBUyxJQUFULEVBQWUsT0FBZixFQUF3QjtBQUN4QyxRQUFJLFFBQVEsR0FBUixHQUFjLEtBQUssR0FBdkIsRUFBNEI7O0FBRTFCLFVBQUksS0FBSyxJQUFMLEtBQWMsSUFBbEIsRUFBd0I7QUFDdEIsYUFBSyxJQUFMLEdBQVksT0FBWjtBQUNELE9BRkQsTUFFTztBQUNMLG9CQUFZLEtBQUssSUFBakIsRUFBdUIsT0FBdkI7QUFDRDtBQUVGLEtBUkQsTUFRTzs7QUFFTCxVQUFJLEtBQUssS0FBTCxLQUFlLElBQW5CLEVBQXlCO0FBQ3ZCLGFBQUssS0FBTCxHQUFhLE9BQWI7QUFDRCxPQUZELE1BRU87QUFDTCxvQkFBWSxLQUFLLEtBQWpCLEVBQXdCLE9BQXhCO0FBQ0Q7QUFFRjtBQUNGLEdBbEJEOztBQW9CQSxNQUFJLHNCQUFzQixTQUF0QixtQkFBc0IsQ0FBUyxJQUFULEVBQWUsRUFBZixFQUFtQjtBQUMzQyxRQUFJLFNBQVMsSUFBYixFQUFtQjtBQUNqQiwwQkFBb0IsS0FBSyxJQUF6QixFQUErQixFQUEvQjtBQUNBLFNBQUcsS0FBSyxHQUFSO0FBQ0EsMEJBQW9CLEtBQUssS0FBekIsRUFBZ0MsRUFBaEM7QUFDRDtBQUNGLEdBTkQ7O0FBUUEsTUFBSSx1QkFBdUIsU0FBdkIsb0JBQXVCLENBQVUsSUFBVixFQUFnQixFQUFoQixF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Q0EsSUFBSSxNQUFKLENBQVcsRUFBWDs7QUFFQSxJQUFJLE1BQUosQ0FBVyxDQUFYO0FBQ0EsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNBLElBQUksTUFBSixDQUFXLENBQVg7QUFDQSxJQUFJLE1BQUosQ0FBVyxDQUFYO0FBQ0EsSUFBSSxNQUFKLENBQVcsQ0FBWDtBQUNBLElBQUksTUFBSixDQUFXLENBQVg7QUFDQSxJQUFJLE1BQUosQ0FBVyxFQUFYO0FBQ0EsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNBLElBQUksTUFBSixDQUFXLEVBQVg7QUFDQSxJQUFJLE1BQUosQ0FBVyxFQUFYO0FBQ0EsSUFBSSxNQUFKLENBQVcsRUFBWDtBQUNBLElBQUksTUFBSixDQUFXLEVBQVg7QUFDQSxJQUFJLE1BQUosQ0FBVyxFQUFYO0FBQ0EsSUFBSSxNQUFKLENBQVcsQ0FBWDtBQUNBLFFBQVEsR0FBUixDQUFZLEdBQVo7QUFDQSxTQUFTLFNBQVQsQ0FBbUIsS0FBbkIsRUFBMEI7QUFDeEIsVUFBUSxHQUFSLENBQVksS0FBWjtBQUNEO0FBQ0QsSUFBSSxlQUFKLENBQW9CLFNBQXBCO0FBQ0EsUUFBUSxHQUFSLENBQVksVUFBWjtBQUNBLElBQUksZ0JBQUosQ0FBcUIsU0FBckI7QUFDQSxRQUFRLEdBQVIsQ0FBWSxVQUFaO0FBQ0EsSUFBSSxpQkFBSixDQUFzQixTQUF0QjtBQUNBLFFBQVEsR0FBUixDQUFZLHNCQUFaO0FBQ0EsSUFBSSxHQUFKLENBQVEsU0FBUjtBQUNBLFFBQVEsR0FBUixDQUFZLHNCQUFaO0FBQ0EsSUFBSSxHQUFKLENBQVEsU0FBUjtBQUNBLFFBQVEsR0FBUixDQUFZLHdCQUFaO0FBQ0EsUUFBUSxHQUFSLENBQVksSUFBSSxNQUFKLENBQVcsRUFBWCxDQUFaOztBQUVBLElBQUksTUFBSixDQUFXLEVBQVgiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gQ2xhc3MgLSBCaW5yYXkgU2VhcmNoIFRyZWVcblxuY2xhc3MgQmluYXJ5U2VhcmNoVHJlZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGxldCBOb2RlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICB0aGlzLmtleSA9IGtleVxuICAgICAgdGhpcy5sZWZ0ID0gbnVsbFxuICAgICAgdGhpcy5yaWdodCA9IG51bGxcbiAgICB9XG5cbiAgICBsZXQgX3Jvb3QgPSBudWxsXG4gICAgbGV0IF9pbnNlcnROb2RlID0gZnVuY3Rpb24obm9kZSwgbmV3Tm9kZSkge1xuICAgICAgaWYgKG5ld05vZGUua2V5IDwgbm9kZS5rZXkpIHtcblxuICAgICAgICBpZiAobm9kZS5sZWZ0ID09PSBudWxsKSB7XG4gICAgICAgICAgbm9kZS5sZWZ0ID0gbmV3Tm9kZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9pbnNlcnROb2RlKG5vZGUubGVmdCwgbmV3Tm9kZSlcbiAgICAgICAgfVxuXG4gICAgICB9IGVsc2Uge1xuXG4gICAgICAgIGlmIChub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgbm9kZS5yaWdodCA9IG5ld05vZGVcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfaW5zZXJ0Tm9kZShub2RlLnJpZ2h0LCBuZXdOb2RlKVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgaW5PcmRlclRyYXZlcnNlTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIGNiKSB7XG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBpbk9yZGVyVHJhdmVyc2VOb2RlKG5vZGUubGVmdCwgY2IpXG4gICAgICAgIGNiKG5vZGUua2V5KVxuICAgICAgICBpbk9yZGVyVHJhdmVyc2VOb2RlKG5vZGUucmlnaHQsIGNiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwcmVPcmRlclRyYXZlcnNlTm9kZSA9IGZ1bmN0aW9uIChub2RlLCBjYikge1xuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY2Iobm9kZS5rZXkpXG4gICAgICAgIHByZU9yZGVyVHJhdmVyc2VOb2RlKG5vZGUubGVmdCwgY2IpXG4gICAgICAgIHByZU9yZGVyVHJhdmVyc2VOb2RlKG5vZGUucmlnaHQsIGNiKVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBwb3N0T3JkZXJUcmF2ZXJzZU5vZGUgPSBmdW5jdGlvbihub2RlLCBjYikge1xuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcG9zdE9yZGVyVHJhdmVyc2VOb2RlKG5vZGUubGVmdCwgY2IpXG4gICAgICAgIHBvc3RPcmRlclRyYXZlcnNlTm9kZShub2RlLnJpZ2h0LCBjYilcbiAgICAgICAgY2Iobm9kZS5rZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IG1heE5vZGUgPSBmdW5jdGlvbihub2RlLCBjYikge1xuICAgICAgaWYgKG5vZGUucmlnaHQgIT09IG51bGwpIHtcbiAgICAgICAgbWF4Tm9kZShub2RlLnJpZ2h0LCBjYilcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNiKG5vZGUua2V5KVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBtaW5Ob2RlID0gZnVuY3Rpb24obm9kZSwgY2IpIHtcbiAgICAgIGlmIChub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgbWluTm9kZShub2RlLmxlZnQsIGNiKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2Iobm9kZS5rZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGZpbmRNaW5Ob2RlID0gZnVuY3Rpb24obm9kZSl7XG4gICAgICB3aGlsZSAobm9kZSAmJiBub2RlLmxlZnQgIT09IG51bGwpIHtcbiAgICAgICAgbm9kZSA9IG5vZGUubGVmdFxuICAgICAgfVxuICAgICAgcmV0dXJuIG5vZGVcbiAgICB9XG5cbiAgICBsZXQgc2VhcmNoTm9kZSA9IGZ1bmN0aW9uKG5vZGUsIGtleSkge1xuICAgICAgaWYgKG5vZGUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gbm9kZS5rZXkpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID4gbm9kZS5rZXkpIHtcbiAgICAgICAgcmV0dXJuIHNlYXJjaE5vZGUobm9kZS5yaWdodCwga2V5KVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHNlYXJjaE5vZGUobm9kZS5sZWZ0LCBrZXkpXG4gICAgICB9XG4gICAgfVxuXG4gICAgbGV0IHJlbW92ZU5vZGUgPSBmdW5jdGlvbihub2RlLCBrZXkpIHtcbiAgICAgIGlmIChub2RlID09PSBudWxsKSByZXR1cm4gbnVsbFxuXG4gICAgICBpZiAoa2V5IDwgbm9kZS5rZXkpIHtcbiAgICAgICAgbm9kZS5sZWZ0ID0gcmVtb3ZlTm9kZShub2RlLmxlZnQsIGtleSlcbiAgICAgICAgcmV0dXJuIG5vZGVcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID4gbm9kZS5rZXkpIHtcbiAgICAgICAgbm9kZS5yaWdodCA9IHJlbW92ZU5vZGUobm9kZS5yaWdodCwga2V5KVxuICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgfSBlbHNlIHsgLy8gS2V5IGVxdWFscyBub2RlLmtleVxuICAgICAgICAvLyAxLiBsZWFmIG5vZGVcbiAgICAgICAgaWYgKG5vZGUubGVmdCA9PT0gbnVsbCAmJiBub2RlLnJpZ2h0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIDIuIG5vZGUgd2l0aCAxIGNoaWxkXG4gICAgICAgIGlmIChub2RlLmxlZnQgPT09IG51bGwpIHtcbiAgICAgICAgICBub2RlID0gbm9kZS5yaWdodFxuICAgICAgICAgIHJldHVybiBub2RlXG4gICAgICAgIH0gZWxzZSBpZiAobm9kZS5yaWdodCA9PT0gbnVsbCkge1xuICAgICAgICAgIG5vZGUgPSBub2RlLmxlZnRcbiAgICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gMy4gbm9kZSB3aXRoIDIgY2hpbGRcbiAgICAgICAgbGV0IHJpZ2h0TWluTm9kZSA9IGZpbmRNaW5Ob2RlKG5vZGUucmlnaHQpXG4gICAgICAgIG5vZGUua2V5ID0gcmlnaHRNaW5Ob2RlLmtleVxuICAgICAgICBub2RlLnJpZ2h0ID0gcmVtb3ZlTm9kZShub2RlLnJpZ2h0LCByaWdodE1pbk5vZGUua2V5KVxuICAgICAgICByZXR1cm4gbm9kZVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMucmVtb3ZlID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gcmVtb3ZlTm9kZShfcm9vdCwga2V5KVxuICAgIH1cblxuICAgIHRoaXMuc2VhcmNoID0gZnVuY3Rpb24oa2V5KSB7XG4gICAgICByZXR1cm4gc2VhcmNoTm9kZShfcm9vdCwga2V5KVxuICAgIH1cblxuICAgIHRoaXMubWluID0gZnVuY3Rpb24oY2IpIHtcbiAgICAgIHJldHVybiBtaW5Ob2RlKF9yb290LCBjYilcbiAgICB9XG5cbiAgICB0aGlzLm1heCA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICByZXR1cm4gbWF4Tm9kZShfcm9vdCwgY2IpXG4gICAgfVxuXG4gICAgdGhpcy5pbnNlcnQgPSBmdW5jdGlvbihrZXkpe1xuICAgICAgbGV0IG5ld05vZGUgPSBuZXcgTm9kZShrZXkpXG5cbiAgICAgIGlmIChfcm9vdCA9PT0gbnVsbCkge1xuICAgICAgICBfcm9vdCA9IG5ld05vZGVcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIF9pbnNlcnROb2RlKF9yb290LCBuZXdOb2RlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuaW5PcmRlclRyYXZlcnNlID0gZnVuY3Rpb24oY2IpIHtcbiAgICAgIGluT3JkZXJUcmF2ZXJzZU5vZGUoX3Jvb3QsIGNiKVxuICAgIH1cblxuICAgIHRoaXMucHJlT3JkZXJUcmF2ZXJzZSA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICBwcmVPcmRlclRyYXZlcnNlTm9kZShfcm9vdCwgY2IpXG4gICAgfVxuXG4gICAgdGhpcy5wb3N0T3JkZXJUcmF2ZXJzZSA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgICBwb3N0T3JkZXJUcmF2ZXJzZU5vZGUoX3Jvb3QsIGNiKVxuICAgIH1cblxuICAgIHRoaXMudHJlZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIF9yb290XG4gICAgfVxuICB9XG59XG5cbmxldCBic3QgPSB3aW5kb3cuYnN0ID0gbmV3IEJpbmFyeVNlYXJjaFRyZWUoKVxuYnN0Lmluc2VydCgxMSlcblxuYnN0Lmluc2VydCg3KTtcbmJzdC5pbnNlcnQoMTUpO1xuYnN0Lmluc2VydCg1KTtcbmJzdC5pbnNlcnQoMyk7XG5ic3QuaW5zZXJ0KDkpO1xuYnN0Lmluc2VydCg4KTtcbmJzdC5pbnNlcnQoMTApO1xuYnN0Lmluc2VydCgxMyk7XG5ic3QuaW5zZXJ0KDEyKTtcbmJzdC5pbnNlcnQoMTQpO1xuYnN0Lmluc2VydCgyMCk7XG5ic3QuaW5zZXJ0KDE4KTtcbmJzdC5pbnNlcnQoMjUpO1xuYnN0Lmluc2VydCg2KTtcbmNvbnNvbGUubG9nKGJzdCk7XG5mdW5jdGlvbiBwcmludE5vZGUodmFsdWUpIHtcbiAgY29uc29sZS5sb2codmFsdWUpO1xufVxuYnN0LmluT3JkZXJUcmF2ZXJzZShwcmludE5vZGUpXG5jb25zb2xlLmxvZygnLS0tLS0tLS0nKTtcbmJzdC5wcmVPcmRlclRyYXZlcnNlKHByaW50Tm9kZSlcbmNvbnNvbGUubG9nKCctLS0tLS0tLScpO1xuYnN0LnBvc3RPcmRlclRyYXZlcnNlKHByaW50Tm9kZSlcbmNvbnNvbGUubG9nKCctLS0tLUZpbmQgTWF4LS0tLS0tLScpO1xuYnN0Lm1heChwcmludE5vZGUpXG5jb25zb2xlLmxvZygnLS0tLS1GaW5kIE1pbi0tLS0tLS0nKTtcbmJzdC5taW4ocHJpbnROb2RlKVxuY29uc29sZS5sb2coJy0tLS0tU2VhcmNoIEZvci0tLS0tLS0nKTtcbmNvbnNvbGUubG9nKGJzdC5zZWFyY2goOTkpKVxuXG5ic3QucmVtb3ZlKDE1KVxuIl19
