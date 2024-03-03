const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class NodeTree {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const nodeTree = new NodeTree(data);
    if (!this.rootNode) {
      this.rootNode = nodeTree;
    } else {
      this.insertNode(this.rootNode, nodeTree);
    }
  }

  insertNode(node, nodeTree) {
    if (nodeTree.data < node.data) {
      if (!node.left) {
        node.left = nodeTree;
      } else {
        this.insertNode(node.left, nodeTree);
      }
    } else {
      if (!node.right) {
        node.right = nodeTree;
      } else {
        this.insertNode(node.right, nodeTree);
      }
    }
  }

  has(data) {
    return !!this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      return this.findNode(node.left, data);
    } else if (data > node.data) {
      return this.findNode(node.right, data);
    } else {
      return node;
    }
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }
    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      let tempNode = this.getMinimumNode(node.right);
      node.data = tempNode.data;
      node.right = this.removeNode(node.right, tempNode.data);
      return node;
    }
  }

  getMinimumNode(node) {
    if (!node.left) {
      return node;
    } else {
      return this.getMinimumNode(node.left);
    }
  }

  min() {
    if (!this.rootNode) return null;
    let currentNode = this.rootNode;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (!this.rootNode) return null;
    let currentNode = this.rootNode;
    while (currentNode.right) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
