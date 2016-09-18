// Constructor function of the List
function List() {
	this.listSize = 0; // number of elements in the list
	this.pos = 0;		// the current postion in the list
	this.dataStore = [];//initializes an empty array to store list elements
	
	this.append = append; // adding an element to a list
	this.find = find; 	  // find an ele and return the index , if no return -1
	this.remove = remove; //remove an element from a list
	this.length = length; // return the length of the list
	this.toString = toString; // view the element in a list
	this.insert = insert; //insert an element after one element
	this.clear = clear; //clear all elements in the list

	this.print = print; //print the element in the list
}

function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = 0;
	this.pos = 0;
}

function insert(element, after) {
	var foundAt = this.find(after);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt+1, 0, element);
		this.listSize++;
		return true;
	}
	return false;
}

function toString() {
	return this.dataStore;
}

function length(){
	return this.listSize;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function find(element) {
	for(var i=0; i < this.listSize; i++){
		if (element == this.dataStore[i]) {
			return i;
		}
	}
	return -1;
}

function remove(element) {
	var foundAt = this.find(element);
	if (foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}
	
function print() {
	for(var i=0; i < this.listSize; i++){
		console.log(this.dataStore[i]);
	}
}
