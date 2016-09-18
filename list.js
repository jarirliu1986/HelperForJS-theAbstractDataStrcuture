// Constructor function of the List
function List() {
	this.listSize = 0; // number of elements in the list
	this.pos = 0;		// the current postion in the list
	this.dataStore = [];//initializes an empty array to store list elements
	
	this.append = append; // adding an element to a list
	this.find = find; 	  // find an ele and return the index , if no return -1
	this.remove = remove; //remove an element from a list
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

function remove(argument) {
	// body...
}
	

