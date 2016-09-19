var List = require("../src/list.js");

describe("List", function () {
	var list;
	beforeEach(function(){
		list = new List();
	});

	it("exist", function(){
		expect(list).toBeDefined();
	});

	it("append", function(){
		list.append("a");
		list.append("b");

		expect(list.length()).toBe(2);
	});
});