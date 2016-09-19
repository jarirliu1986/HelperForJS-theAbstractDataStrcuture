var Stack = require('../src/stack');

describe("Stack", function(){
	var stack;
	beforeEach(function () {
		stack = new Stack();
	});

	it("exist", function(){
		expect(stack).toBeDefined();
	});

	it("push", function () {
		stack.push("a");
		stack.push("b");
		expect(stack.length()).toBe(2);
	});

	it("pop", function(){
		stack.push("a");
		stack.push("b");
		stack.push("aa");

		var ele = stack.pop();
		expect(ele).toBe("aa");
		expect(stack.length()).toBe(2);

		ele = stack.pop();
		expect(ele).toBe("b");
		expect(stack.length()).toBe(1);
	});

	it("peek", function(){
		stack.push("a");
		stack.push("b");
		stack.push("aa");

		var ele = stack.peek();
		expect(stack.length()).toBe(3);
		expect(ele).toBe("aa");
	})

});