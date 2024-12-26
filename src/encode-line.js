const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let encode = '';
	let count = 1;

	for (let i = 0; i < str.length; i++) {
		if (str[i] === str[i + 1]) {
			count++;
		} else {
			encode += count > 1 ? count + str[i] : str[i];
			count = 1;
		}
  }
  return encode;
}

module.exports = {
	encodeLine,
};
