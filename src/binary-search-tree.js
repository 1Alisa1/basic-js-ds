const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {
    const newNode = new Node(data);
    
    if (this._root === null) {
      this._root = newNode;
      return;
    }

    let currentNode = this._root;
    while (true) {
      if (currentNode.data === newNode.data) break;
      else if (newNode.data > currentNode.data) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      } else if (newNode.data < currentNode.data) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data) {
    function internal(data, currentNode) {
      if (currentNode === null) return null;
      else if (data === currentNode.data) return currentNode;
      else if (data > currentNode.data) return internal(data, currentNode.right);
      else return internal(data, currentNode.left);
    }
    return internal(data, this._root);
  }

  remove(data) {
    if (this._root === null) return;

    function internal(currentNode, data) {
      if (currentNode === null) return null;
      
      if (currentNode.data > data) {
        currentNode.left = internal(currentNode.left, data);
        return currentNode;
      }
      else if (currentNode.data < data) {
        currentNode.right = internal(currentNode.right, data);
        return currentNode;
      }
  
      if (currentNode.left == null) {
        return currentNode.right;
      }
      else if (currentNode.right == null) {
        return currentNode.left;
      } else {
        let successorParent = currentNode;
   
        let successor = currentNode.right;
        while (successor.left !== null) {
          successorParent = successor;
          successor = successor.left;
        }
  
        if (successorParent !== currentNode) successorParent.left = successor.right;
        else successorParent.right = successor.right;
  
        currentNode.data = successor.data;
  
        return currentNode;
      }
    }

    internal(this._root, data)
  }

  min() {
    if (this._root === null) return null;

    let currentNode = this._root;
    
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (this._root === null) return null;

    let currentNode = this._root;
    
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};