// Linked List
function LinkedList () {
  this.items = []
}

LinkedList.prototype = {
  // constructor
  Node: function(el, nextEl) {
    this.item = el
    this.next = nextEl
  },
  // Internal
  _insert: function(item, pos = this.items.length) {
    let newItem;

    newItem = (pos === this.items.length) ? new this.Node(item, this.items[0]) : new this.Node(item, this.items[pos])

    if (this.items.length > 0 ) this.items[pos-1].next = newItem
    this.items.splice(pos, 0, newItem)

    return this.items
  },
  _removeAt: function(pos) {
    // Todo: if pos > arr.length - 1 throw error
    if (pos >= this.items.length) {
      throw new Error('Exceed linked list length!!');
    }

    this.items.splice(pos, 1)
    if (this.items.length === 0) return this.items
    if (this.items.length === 1) {
      this.items[0].next = null
      return this.items
    }

    if (pos !== 0) {
      this.items[pos-1].next = this.items[pos]
    } else {
      this.items[this.items.length - 1].next = this.items[0]
    }
    // (pos !== 0 ? this.items[pos-1].next = this.items[pos] : this.items[this.items.length - 1].next = this.items[0])
    if (this.items.length > 1 && pos === this.items.length) this.items[this.items.length - 1].next = this.items[0]
    return this.items
  },
  // Methods
  insert: function(item, pos) {
    return this._insert(item, pos)
  },
  append: function(item) {
    return this._insert(item)
  },
  removeAt: function(pos) {
    return this._removeAt(pos)
  },
  // remove specific item
  remove: function(item) {
    const items = this.items
    for (el of items) {
      if(el.item === item) {
        const pos = items.indexOf(el)
        this._removeAt(pos)
        return items
      }
    }
    return items
  },
  clear: function() {
    this.items.length = 0
    return this.items
  },
  indexOf: function(el) {
    return this.items.map(node => node.item).indexOf(el)
  },
  isEmpty: function() {
    return this.items.length === 0
  },
  size: function() {
    return this.items.length
  }
}

var el = window.el = new LinkedList()
console.log(el);
el.append('a')
el.append('b')
console.log(el);

el.append('c', 1)
console.log(el);
// el.removeAt(1)
console.log(el);
