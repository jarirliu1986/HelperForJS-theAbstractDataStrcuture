module.exports =  function LList() {
	this.head = new Node("head");

	this.find = find;
	this.insert = insert;
	this.toString = toString;
	this.hello = hello;
}
function hi() {
	return "hello";
}
function hello(){
	var a = hi();
	return a;
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