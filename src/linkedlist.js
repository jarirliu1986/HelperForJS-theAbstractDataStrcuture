module.exports =  function LList() {
	this.head = new Node("head");

	this.find = find;
	this.insert = insert;
	this.toString = toString;
	this.findPre = findPre;
	this.remove = remove;
}

function findPre(ele){
	var currNode = this.head;
	while(currNode.next != null){
		if(currNode.next.element != ele){
			currNode = currNode.next;
		}else{
			return currNode;
		}
	}
	return null;
}

function remove(ele) {
	var preNode = this.findPre(ele);
	if(preNode != null){
		preNode.next = preNode.next.next;
		preNode.next.next = null;
	}
}

function toString() {
	var currNode = this.head;
	var str = "";
	while(currNode.next != null){
		str += currNode.next.element;
		currNode = currNode.next;
	}
	return str;
}

function find(ele) {
	var currNode = this.head;
	while(currNode != null){
		if(currNode.element != ele){
			currNode = currNode.next;
		}else{
			return currNode;
		}
	}
	return currNode;
}

function insert(newEle, ele) {
	var newNode = new Node(newEle);
	var currNode = this.find(ele);

	if (currNode != null) {
		newNode.next = currNode.next;
		currNode.next = newNode;
	}
}

function Node(element) {
	this.element = element;
	this.next = null;
}