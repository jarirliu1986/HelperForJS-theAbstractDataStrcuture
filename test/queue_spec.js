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

		var ele = queue.get();
		expect(ele).toBe("a");
		expect(queue.size()).toBe(2);
		var ele1 = queue.get();
		expect(ele1).toBe("b");
	});

	it("front", function () {
		queue.put("a");
		queue.put("b");
		queue.put("aa");
		var ele = queue.front();
		expect(ele).toBe("a");
		expect(queue.size()).toBe(3);
	});

	it("end", function () {
		queue.put("a");
		queue.put("b");
		queue.put("aa");
		var ele = queue.end();
		expect(ele).toBe("aa");
		expect(queue.size()).toBe(3);
	});

	it("isEmpty", function () {
		expect(queue.isEmpty()).toBe(true);
		queue.put("a");
		expect(queue.isEmpty()).toBe(false);
	})
})