const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
	constructor(direct = true) {
		this.direct = direct;
	}
	encrypt(message, key) {
		if (!message || !key) {
			throw new Error('Incorrect arguments!');
		}

		let result = [];
		let keyIndex = 0;
		message = message.toUpperCase();
		key = key.toUpperCase();

		for (let i = 0; i < message.length; i++) {
			const messageChar = message.charCodeAt(i);
			if (messageChar >= 65 && messageChar <= 90) {
				const keyChar = key.charCodeAt(keyIndex % key.length);
				const encryptedChar = String.fromCharCode(((messageChar - 65 + (keyChar - 65)) % 26) + 65);
				result.push(encryptedChar);
				keyIndex++;
			} else {
				result.push(message[i]);
			}
		}
		return this.direct ? result.join('') : result.reverse().join('');
	}
	decrypt(encodedMessage, key) {
		if (!encodedMessage || !key) {
			throw new Error('Incorrect arguments!');
		}
		let result = [];
		let keyIndex = 0;
		encodedMessage = encodedMessage.toUpperCase();
		key = key.toUpperCase();

		for (let i = 0; i < encodedMessage.length; i++) {
			const encodedChar = encodedMessage.charCodeAt(i);
			if (encodedChar >= 65 && encodedChar <= 90) {
				const keyChar = key.charCodeAt(keyIndex % key.length);
				const decryptedChar = String.fromCharCode(((encodedChar - 65 - (keyChar - 65) + 26) % 26) + 65);
				result.push(decryptedChar);
				keyIndex++;
			} else {
				result.push(encodedMessage[i]);
			}
		}
		return this.direct ? result.join('') : result.reverse().join('');
	}
}

module.exports = {
	VigenereCipheringMachine,
};
