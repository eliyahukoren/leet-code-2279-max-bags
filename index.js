/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
module.exports = maximumBags = (capacity, rocks, additionalRocks) => {
	let count = 0;
	let candidates = {};

	for(let i = 0; i < rocks.length; i ++){
		let rem = capacity[i] - rocks[i]; //?
		if (rem == 0) {
			count += 1 //?
			continue;
		}

		if (rem <= additionalRocks) {
			candidates[i] = rem; //?
		}
	}
	const sorted = Object.entries(candidates).sort((a, b) => a[1] - b[1]); //?

	for(let j = 0; j < sorted.length; j ++){
		additionalRocks -= capacity[sorted[j][0]] - rocks[sorted[j][0]]; //?
		
		if (additionalRocks < 0){
			break;
		}
		count += 1; //?
		if (additionalRocks == 0) break;
	}

	return count; //?
};

maximumBags([1], [0], 1);
