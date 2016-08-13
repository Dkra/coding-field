// Class - Binray Search Tree

class BinarySearchTree {
  constructor() {
    let Node = function(key) {
      this.key = key
      this.left = null
      this.right = null
    }

    let _root = null
    let _insertNode = function(node, newNode) {
      if (newNode.key < node.key) {

        if (node.left === null) {
          node.left = newNode
        } else {
          _insertNode(node.left, newNode)
        }

      } else {

        if (node.right === null) {
          node.right = newNode
        } else {
          _insertNode(node.right, newNode)
        }

      }
    }

    let inOrderTraverseNode = function(node, cb) {
      if (node !== null) {
        inOrderTraverseNode(node.left, cb)
        cb(node.key)
        inOrderTraverseNode(node.right, cb)
      }
    }

    let preOrderTraverseNode = function (node, cb) {
      if (node !== null) {
        cb(node.key)
        preOrderTraverseNode(node.left, cb)
        preOrderTraverseNode(node.right, cb)
      }
    }

    let postOrderTraverseNode = function(node, cb) {
      if (node !== null) {
        postOrderTraverseNode(node.left, cb)
        postOrderTraverseNode(node.right, cb)
        cb(node.key)
      }
    }

    let maxNode = function(node, cb) {
      if (node.right !== null) {
        maxNode(node.right, cb)
      } else {
        cb(node.key)
      }
    }

    let minNode = function(node, cb) {
      if (node.left !== null) {
        minNode(node.left, cb)
      } else {
        cb(node.key)
      }
    }

    let findMinNode = function(node){
      while (node && node.left !== null) {
        node = node.left
      }
      return node
    }

    let searchNode = function(node, key) {
      if (node === null) {
        return false
      } else if (key === node.key) {
        return true
      } else if (key > node.key) {
        return searchNode(node.right, key)
      } else {
        return searchNode(node.left, key)
      }
    }

    let removeNode = function(node, key) {
      if (node === null) return null

      if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node
      } else if (key > node.key) {
        node.right = removeNode(node.right, key)
        return node
      } else { // Key equals node.key
        // 1. leaf node
        if (node.left === null && node.right === null) {
          return null
        }

        // 2. node with 1 child
        if (node.left === null) {
          node = node.right
          return node
        } else if (node.right === null) {
          node = node.left
          return node
        }

        // 3. node with 2 child
        let rightMinNode = findMinNode(node.right)
        node.key = rightMinNode.key
        node.right = removeNode(node.right, rightMinNode.key)
        return node
      }
    }

    this.remove = function(key) {
      return removeNode(_root, key)
    }

    this.search = function(key) {
      return searchNode(_root, key)
    }

    this.min = function(cb) {
      return minNode(_root, cb)
    }

    this.max = function(cb) {
      return maxNode(_root, cb)
    }

    this.insert = function(key){
      let newNode = new Node(key)

      if (_root === null) {
        _root = newNode
      } else {
        _insertNode(_root, newNode)
      }
    }

    this.inOrderTraverse = function(cb) {
      inOrderTraverseNode(_root, cb)
    }

    this.preOrderTraverse = function(cb) {
      preOrderTraverseNode(_root, cb)
    }

    this.postOrderTraverse = function(cb) {
      postOrderTraverseNode(_root, cb)
    }

    this.tree = function() {
      return _root
    }
  }
}

let bst = window.bst = new BinarySearchTree()
bst.insert(11)

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
bst.inOrderTraverse(printNode)
console.log('--------');
bst.preOrderTraverse(printNode)
console.log('--------');
bst.postOrderTraverse(printNode)
console.log('-----Find Max-------');
bst.max(printNode)
console.log('-----Find Min-------');
bst.min(printNode)
console.log('-----Search For-------');
console.log(bst.search(99))

bst.remove(15)
