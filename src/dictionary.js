function dictionary() {
	
	this.datastore = new Array();

	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
}

function add(key, value) {
	this.datastore[key] = value;
}

function find(key){
	return this.datastore[key];
}

function remove(key){
	delete this.datastore[key];
}

function showAll() {
	for(var key in this.datastore)
	 	console.log(key+ "->"+ this.datastore[key]);
	//console.log(this.datastore);
}

var d = new dictionary();
d.add("hi", 2);
d.add("hello", 3);
d.add("hee", "what");
d.showAll();