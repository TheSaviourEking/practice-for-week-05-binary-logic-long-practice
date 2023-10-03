const addZeros = require('../utils/addZeros');
const convertToBase2 = require('./2-convertToBase2');

// Translate the ASCII strings in the console.logs below to 8-bit binary strings
// Implement the imported helper function addZeros()
//    Read the export file for the explanation of how it works

/******************************************************************************/

const asciiTo8bit = str => {
  // Your code here
  let map = { 1: 49, 2: 50, 3: 51, ' ': 32, '!': 33, ',': 44, 'A': 65, 'B': 66, 'C': 67, 'H': 72, 'd': 100, 'e': 101, 'l': 108, 'o': 111, 'r': 114, 'w': 119 };
  str = str.split('');

  for (let i = 0; i < str.length; i++) {
    if (str[i] in map) {
      str[i] = addZeros(convertToBase2(map[str[i]]).slice(2), 8)
    }
  }
  return str.join('');
};

/******************************************************************************/

// console.log(asciiTo8bit('123'));
// // 001100010011001000110011

// console.log(asciiTo8bit('ABC'));
// // 01000001 01000010 01000011

// console.log(asciiTo8bit('Hello, world!'));
// // 01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001

module.exports = asciiTo8bit;
