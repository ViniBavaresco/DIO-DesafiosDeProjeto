function uniqueElements(array) {
	let unique = new Set(array);
	return [...unique];
}

const arr = [2, 36, 2, 2048, 2048, 256, 4096, 64];

console.log(uniqueElements(arr));