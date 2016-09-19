var Queue = require('../src/queue');

describe("Queue", function () {
	var queue;
	beforeEach(function(){
		queue = new Queue();
	});

	it("exist", function(){
		expect(queue).toBeDefined();
	});

	it("put", function () {
		queue.put("a");
		queue.put("b");

		expect(queue.size()).toBe(2);
	});

	it("toString", function(){
		queue.put("a");
		queue.put("b");
		queue.put("aa");

		expect(queue.toString()).toBe("abaa");
		expect(queue.size()).toBe(3);
	});

	it("get", function(){
		queue.put("a");
		queue.put("b");
		queue.put("aa");
	});
})