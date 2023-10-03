// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  // Your code here
  str = str.split('');
  let base = str.splice(0, 2);
  base[1] === 'b' ? base = 2 : base = 16;
  let map = { 'a': 10, 'b': 11, 'c': 12, 'd': 13, 'e': 14, 'f': 15 };
  str.reverse();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] in map) {
      str[i] = map[str[i]];
    }
    sum += str[i] * (base ** i);
  }
  return sum;
};

/******************************************************************************/

// console.log(convertToBase10('0b1100')); // 12
// console.log(convertToBase10('0b0101')); // 5
// console.log(convertToBase10('0b1000')); // 8
// console.log(convertToBase10('0b0111')); // 7

// console.log('––––––');

// console.log(convertToBase10('0b10100101')); // 165
// console.log(convertToBase10('0b11111111')); // 255
// console.log(convertToBase10('0b01010101')); // 85
// console.log(convertToBase10('0b00110011')); // 51

// console.log('––––––');

// console.log(convertToBase10('0xf')); // 15
// console.log(convertToBase10('0xfa')); // 250
// console.log(convertToBase10('0x1234')); // 4660
// console.log(convertToBase10('0xc9a1')); // 51617
// console.log(convertToBase10('0xbf12')); // 48914

module.exports = convertToBase10;
