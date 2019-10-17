const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	push(data, priority) {
			const newNode = new Node(data,priority);
			this.insertNode(newNode);
			this.shiftNodeUp(newNode);
			this.size++;
	}

	pop() {
	if(this.size){
		
	}
	}

	detachRoot() {
    const detached = this.root;
    this.root = null;
    if (this.parentNodes[0] === detached) {
		this.parentNodes.shift();
	}
    return detached;
	}

	restoreRootFromLastInsertedNode(detached) {
	
	}

	size() {
		return this.size;
	}

	isEmpty() {
		return this.size === 0;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.size = 0;
	}

	insertNode(node) {
		if(!this.root){
			this.root = node;
			this.parentNodes.push(node)
			return
		}
		this.parentNodes[0].appendChild(node);
		this.parentNodes.push(node);

		if (this.parentNodes[0].left != null && this.parentNodes[0].right != null) {
			this.parentNodes.shift();
		}
		
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
