module.exports = maximumBags = (capacity, rocks, additionalRocks) => {
	const capLength = capacity.length;
	const excessCap = [];
	let totalExcess = 0;

	for (let i = 0; i < capLength; i++) {
		excessCap.push(capacity[i] - rocks[i]);
		totalExcess += capacity[i] - rocks[i];
	}

	// in case we have the same amount or more then of additional rocks
	// still have rocks or equal, we done.
	if (additionalRocks >= totalExcess) return capLength;
	excessCap.sort((a, b) => a - b)

	let fullBags = 0;
	for (let i = 0; i < capLength; i++) {
		let amountToAdd = Math.min(excessCap[i], additionalRocks);
		excessCap[i] -= amountToAdd;
		additionalRocks -= amountToAdd;

		if( excessCap[i] === 0){
			fullBags ++;
		}else{
			break;
		}
	}

	return fullBags;
};
