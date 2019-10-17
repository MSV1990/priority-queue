class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {
if (node){
    if (this.left === null) {
      node.parent = this;
      this.left = node;
      return;
    }
    if (this.right === null) {
      node.parent = this;
      this.right = node;
      return;
	}
}
  }

  removeChild(node) {
    if (node === this.left) {
      this.left = null;
      node.parent = null;
    } else if (node === this.right) {
      this.right = null;
      node.parent = null;
    } else throw new Error("No child!");
  }

  remove() {
    if (this.parent) {
      this.parent.removeChild(this);
    }
  }

  swapWithParent() {
    if (this.parent) {
      const child = this;
      const parent = this.parent;
      const grandParent = this.parent.parent;
      const parentLeft = this.parent.left;
      const parentRight = this.parent.right;
      const childLeft = this.left;
      const childRight = this.right;

    
      if (childLeft) {
        childLeft.remove();
      }

      if (childRight) {
        childRight.remove();
      }

      if (parentLeft) {
        parentLeft.remove();
      }

      if (parentRight) {
        parentRight.remove();
      }

      if (grandParent) {
        parent.remove();
        grandParent.appendChild(child);
      }

      if (child === parentRight) {
        child.appendChild(parentLeft);
        child.appendChild(parent);
      }

      if (child === parentLeft) {
        child.appendChild(parent);
        child.appendChild(parentRight);
	  }
	  
	  parent.appendChild(childRight);
      parent.appendChild(childLeft);
    }
  }
}

module.exports = Node;
