module.exports = function Queue() {
	this.dataStore = [];

	this.put = put;
	this.get = get;
	this.isEmpty = isEmpty;
	this.front = front;
	this.end = end;
	this.toString = toString;
	this.size = size;
}

function toString() {
	var str="";
	for(var i=0; i<this.dataStore.length; i++){
		str += this.dataStore[i];
	}
	return str;
}

function isEmpty() {
	if (this.dataStore.length > 0)
		return false;
	else 
		return true;
}

function put(element) {
	this.dataStore.push(element);
}

function get() {
	return this.dataStore.shift();
}

function size() {
	return this.dataStore.length;
}

function front() {
	if (this.dataStore.length > 0) {
		return this.dataStore[0];
	}
	return null;
}

function end() {
	var len = this.dataStore.length;
	if (len>0) {
		return this.dataStore[len-1];
	}
	return null;
}

