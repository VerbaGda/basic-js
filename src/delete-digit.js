const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	const arr = n.toString();
	let max = -Infinity;
	for (let i = 0; i < arr.length; i++) {
		const num = Number(arr.slice(0, i) + arr.slice(i + 1));
		if (num > max) {
			max = num;
		}
	}
	return max;
}

module.exports = {
	deleteDigit,
};
