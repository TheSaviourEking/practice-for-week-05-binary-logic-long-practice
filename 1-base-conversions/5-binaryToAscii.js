// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

const convertToBase10 = require("./1-convertToBase10");

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const binaryToAscii = str => {
  // Your code here
  let map = { 32: ' ', 44: ',', 65: 'A', 66: 'B', 67: 'C', 72: 'H', 97: 'a', 98: 'b', 99: 'c', 100: 'd', 101: 'e', 108: 'l', 111: 'o', 114: 'r', 119: 'w' };
  str = binaryStringToArray(str)

  for (let i = 0; i < str.length; i++) {
    str[i] = map[convertToBase10('0b' + str[i])];
  }

  return str.join('');
};

/******************************************************************************/

// console.log(binaryToAscii('011000010110001001100011'));
// // 'abc'

// console.log(binaryToAscii('010000010100001001000011'));
// // 'ABC'

// console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// // 'Hello, world'

module.exports = binaryToAscii;
