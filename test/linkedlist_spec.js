var LList = require("../src/linkedlist");

describe("linkedlist", function () {
	var llist;
	beforeEach(function(){
		llist = new LList();
	});
	it("exist", function(){
		expect(llist).toBeDefined();
	});
	it("insert",function(){
		expect(llist.find("a")).toBe(null);
		llist.insert("a","head");
		expect(llist.find("a").element).toBe("a");
	});

	it("toString", function(){
		llist.insert("a","head");
		//llist.insert("b","a");
		llist.insert("v","a");
		expect(llist.toString()).toBe("av");
	});

	it("remove",function(){
		llist.insert("a","head");
		llist.insert("v","a");
		llist.insert("b","v");
		llist.remove("v");
		expect(llist.toString()).toBe("ab");
		llist.remove("v");
		expect(llist.toString()).toBe("ab");
	});
});