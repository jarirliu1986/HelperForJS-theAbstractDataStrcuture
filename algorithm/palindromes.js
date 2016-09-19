var Stack = require("../src/stack");

function isPalindrome(str) {
	var s = new Stack();
	for (var i = 0; i < str.length; i++) {
		s.push(str[i]);
	}

	var rStr = "";
	while(s.length() > 0){
		rStr += s.pop();
	}

	if(str == rStr){
		return true;
	}

	return false;
}

console.log(isPalindrome("helleh"));