const assert = require("assert");
const maximumBags = require("../refactor");

describe("Refactored Maximum Bags With Full Capacity of Rocks", () => {
	it("Basic tests after refactor", () => {
		assert.equal(maximumBags([2, 3, 4, 5], [1, 2, 4, 4], 2), 3);
		assert.equal(maximumBags([10, 2, 2], [2, 2, 0], 100), 3);
		assert.equal(
			maximumBags([10, 8, 6, 11, 5, 2, 2], [6, 5, 1, 3, 1, 0, 0], 4),
			2
		);
	});

	it("Special tests after refactor", () => {
		assert.equal(maximumBags([1], [0], 1), 1);
	});
});
