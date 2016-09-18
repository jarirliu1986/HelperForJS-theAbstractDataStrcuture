// Constructor function of the List
function List() {
	this.listSize = 0; // number of elements in the list
	this.pos = 0;		// the current postion in the list
	this.dataStore = [];//initializes an empty array to store list elements
	
	this.append = append;
	
	// append: adding an element to a list
	function append(element) {
	 	this.dataStore[this.listSize++] = element;
	}
}
	

