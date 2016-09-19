//LIFO last in first out data structure

//var print = require("../src/print");

module.exports = function Stack() {
	this.dataStore = [];
	this.top = 0;

	this.push = push;
	this.pop = pop;
	this.peek = peek;
	this.length = length;
}

function push(element) {
	this.dataStore[this.top++] = element;
	//print();
}

function pop() {
	var ele = this.dataStore[this.top-1];
	this.dataStore.splice(this.top-1,1);
	this.top--;
	return ele;
}

function peek() {
	return this.dataStore[this.top-1];
}

function length() {
	return this.top;
}

