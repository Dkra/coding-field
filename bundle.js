(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Linked List
function LinkedList() {
  this.items = [];
}

LinkedList.prototype = {
  // constructor
  Node: function Node(el, nextEl) {
    this.item = el;
    this.next = nextEl;
  },
  // Internal
  _insert: function _insert(item) {
    var pos = arguments.length <= 1 || arguments[1] === undefined ? this.items.length : arguments[1];

    var newItem = void 0;

    newItem = pos === this.items.length ? new this.Node(item, this.items[0]) : new this.Node(item, this.items[pos]);

    if (this.items.length > 0) this.items[pos - 1].next = newItem;
    this.items.splice(pos, 0, newItem);

    return this.items;
  },
  _removeAt: function _removeAt(pos) {
    // Todo: if pos > arr.length - 1 throw error
    if (pos >= this.items.length) {
      throw new Error('Exceed linked list length!!');
    }

    this.items.splice(pos, 1);
    if (this.items.length === 0) return this.items;
    if (this.items.length === 1) {
      this.items[0].next = null;
      return this.items;
    }

    if (pos !== 0) {
      this.items[pos - 1].next = this.items[pos];
    } else {
      this.items[this.items.length - 1].next = this.items[0];
    }
    // (pos !== 0 ? this.items[pos-1].next = this.items[pos] : this.items[this.items.length - 1].next = this.items[0])
    if (this.items.length > 1 && pos === this.items.length) this.items[this.items.length - 1].next = this.items[0];
    return this.items;
  },
  // Methods
  insert: function insert(item, pos) {
    return this._insert(item, pos);
  },
  append: function append(item) {
    return this._insert(item);
  },
  removeAt: function removeAt(pos) {
    return this._removeAt(pos);
  },
  // remove specific item
  remove: function remove(item) {
    var items = this.items;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        el = _step.value;

        if (el.item === item) {
          var pos = items.indexOf(el);
          this._removeAt(pos);
          return items;
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return items;
  },
  clear: function clear() {
    this.items.length = 0;
    return this.items;
  },
  indexOf: function indexOf(el) {
    return this.items.map(function (node) {
      return node.item;
    }).indexOf(el);
  },
  isEmpty: function isEmpty() {
    return this.items.length === 0;
  },
  size: function size() {
    return this.items.length;
  }
};

var el = window.el = new LinkedList();
console.log(el);
el.append('a');
el.append('b');
console.log(el);

el.append('c', 1);
console.log(el);
// el.removeAt(1)
console.log(el);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9iZWNvbWUtYmV0dGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FDQ0EsU0FBUyxVQUFULEdBQXVCO0FBQ3JCLE9BQUssS0FBTCxHQUFhLEVBQWI7QUFDRDs7QUFFRCxXQUFXLFNBQVgsR0FBdUI7O0FBRXJCLFFBQU0sY0FBUyxFQUFULEVBQWEsTUFBYixFQUFxQjtBQUN6QixTQUFLLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBSyxJQUFMLEdBQVksTUFBWjtBQUNELEdBTG9COztBQU9yQixXQUFTLGlCQUFTLElBQVQsRUFBd0M7QUFBQSxRQUF6QixHQUF5Qix5REFBbkIsS0FBSyxLQUFMLENBQVcsTUFBUTs7QUFDL0MsUUFBSSxnQkFBSjs7QUFFQSxjQUFXLFFBQVEsS0FBSyxLQUFMLENBQVcsTUFBcEIsR0FBOEIsSUFBSSxLQUFLLElBQVQsQ0FBYyxJQUFkLEVBQW9CLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBcEIsQ0FBOUIsR0FBbUUsSUFBSSxLQUFLLElBQVQsQ0FBYyxJQUFkLEVBQW9CLEtBQUssS0FBTCxDQUFXLEdBQVgsQ0FBcEIsQ0FBN0U7O0FBRUEsUUFBSSxLQUFLLEtBQUwsQ0FBVyxNQUFYLEdBQW9CLENBQXhCLEVBQTRCLEtBQUssS0FBTCxDQUFXLE1BQUksQ0FBZixFQUFrQixJQUFsQixHQUF5QixPQUF6QjtBQUM1QixTQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEdBQWxCLEVBQXVCLENBQXZCLEVBQTBCLE9BQTFCOztBQUVBLFdBQU8sS0FBSyxLQUFaO0FBQ0QsR0FoQm9CO0FBaUJyQixhQUFXLG1CQUFTLEdBQVQsRUFBYzs7QUFFdkIsUUFBSSxPQUFPLEtBQUssS0FBTCxDQUFXLE1BQXRCLEVBQThCO0FBQzVCLFlBQU0sSUFBSSxLQUFKLENBQVUsNkJBQVYsQ0FBTjtBQUNEOztBQUVELFNBQUssS0FBTCxDQUFXLE1BQVgsQ0FBa0IsR0FB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QVIsQ0FBWSxFQUFaIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIExpbmtlZCBMaXN0XG5mdW5jdGlvbiBMaW5rZWRMaXN0ICgpIHtcbiAgdGhpcy5pdGVtcyA9IFtdXG59XG5cbkxpbmtlZExpc3QucHJvdG90eXBlID0ge1xuICAvLyBjb25zdHJ1Y3RvclxuICBOb2RlOiBmdW5jdGlvbihlbCwgbmV4dEVsKSB7XG4gICAgdGhpcy5pdGVtID0gZWxcbiAgICB0aGlzLm5leHQgPSBuZXh0RWxcbiAgfSxcbiAgLy8gSW50ZXJuYWxcbiAgX2luc2VydDogZnVuY3Rpb24oaXRlbSwgcG9zID0gdGhpcy5pdGVtcy5sZW5ndGgpIHtcbiAgICBsZXQgbmV3SXRlbTtcblxuICAgIG5ld0l0ZW0gPSAocG9zID09PSB0aGlzLml0ZW1zLmxlbmd0aCkgPyBuZXcgdGhpcy5Ob2RlKGl0ZW0sIHRoaXMuaXRlbXNbMF0pIDogbmV3IHRoaXMuTm9kZShpdGVtLCB0aGlzLml0ZW1zW3Bvc10pXG5cbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAwICkgdGhpcy5pdGVtc1twb3MtMV0ubmV4dCA9IG5ld0l0ZW1cbiAgICB0aGlzLml0ZW1zLnNwbGljZShwb3MsIDAsIG5ld0l0ZW0pXG5cbiAgICByZXR1cm4gdGhpcy5pdGVtc1xuICB9LFxuICBfcmVtb3ZlQXQ6IGZ1bmN0aW9uKHBvcykge1xuICAgIC8vIFRvZG86IGlmIHBvcyA+IGFyci5sZW5ndGggLSAxIHRocm93IGVycm9yXG4gICAgaWYgKHBvcyA+PSB0aGlzLml0ZW1zLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeGNlZWQgbGlua2VkIGxpc3QgbGVuZ3RoISEnKTtcbiAgICB9XG5cbiAgICB0aGlzLml0ZW1zLnNwbGljZShwb3MsIDEpXG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoID09PSAwKSByZXR1cm4gdGhpcy5pdGVtc1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5pdGVtc1swXS5uZXh0ID0gbnVsbFxuICAgICAgcmV0dXJuIHRoaXMuaXRlbXNcbiAgICB9XG5cbiAgICBpZiAocG9zICE9PSAwKSB7XG4gICAgICB0aGlzLml0ZW1zW3Bvcy0xXS5uZXh0ID0gdGhpcy5pdGVtc1twb3NdXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXS5uZXh0ID0gdGhpcy5pdGVtc1swXVxuICAgIH1cbiAgICAvLyAocG9zICE9PSAwID8gdGhpcy5pdGVtc1twb3MtMV0ubmV4dCA9IHRoaXMuaXRlbXNbcG9zXSA6IHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXS5uZXh0ID0gdGhpcy5pdGVtc1swXSlcbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPiAxICYmIHBvcyA9PT0gdGhpcy5pdGVtcy5sZW5ndGgpIHRoaXMuaXRlbXNbdGhpcy5pdGVtcy5sZW5ndGggLSAxXS5uZXh0ID0gdGhpcy5pdGVtc1swXVxuICAgIHJldHVybiB0aGlzLml0ZW1zXG4gIH0sXG4gIC8vIE1ldGhvZHNcbiAgaW5zZXJ0OiBmdW5jdGlvbihpdGVtLCBwb3MpIHtcbiAgICByZXR1cm4gdGhpcy5faW5zZXJ0KGl0ZW0sIHBvcylcbiAgfSxcbiAgYXBwZW5kOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuX2luc2VydChpdGVtKVxuICB9LFxuICByZW1vdmVBdDogZnVuY3Rpb24ocG9zKSB7XG4gICAgcmV0dXJuIHRoaXMuX3JlbW92ZUF0KHBvcylcbiAgfSxcbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGl0ZW1cbiAgcmVtb3ZlOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgY29uc3QgaXRlbXMgPSB0aGlzLml0ZW1zXG4gICAgZm9yIChlbCBvZiBpdGVtcykge1xuICAgICAgaWYoZWwuaXRlbSA9PT0gaXRlbSkge1xuICAgICAgICBjb25zdCBwb3MgPSBpdGVtcy5pbmRleE9mKGVsKVxuICAgICAgICB0aGlzLl9yZW1vdmVBdChwb3MpXG4gICAgICAgIHJldHVybiBpdGVtc1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbXNcbiAgfSxcbiAgY2xlYXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXRlbXMubGVuZ3RoID0gMFxuICAgIHJldHVybiB0aGlzLml0ZW1zXG4gIH0sXG4gIGluZGV4T2Y6IGZ1bmN0aW9uKGVsKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubWFwKG5vZGUgPT4gbm9kZS5pdGVtKS5pbmRleE9mKGVsKVxuICB9LFxuICBpc0VtcHR5OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcy5sZW5ndGggPT09IDBcbiAgfSxcbiAgc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXMubGVuZ3RoXG4gIH1cbn1cblxudmFyIGVsID0gd2luZG93LmVsID0gbmV3IExpbmtlZExpc3QoKVxuY29uc29sZS5sb2coZWwpO1xuZWwuYXBwZW5kKCdhJylcbmVsLmFwcGVuZCgnYicpXG5jb25zb2xlLmxvZyhlbCk7XG5cbmVsLmFwcGVuZCgnYycsIDEpXG5jb25zb2xlLmxvZyhlbCk7XG4vLyBlbC5yZW1vdmVBdCgxKVxuY29uc29sZS5sb2coZWwpO1xuIl19
