const convertToBase10 = require("../1-base-conversions/1-convertToBase10");
const convertToBase2 = require('../1-base-conversions/2-convertToBase2')
const { expect } = require('chai');
const convertToBase16 = require("../1-base-conversions/3-convertToBase16");
const asciiTo8bit = require("../1-base-conversions/4-asciiTo8bit");
const binaryToAscii = require("../1-base-conversions/5-binaryToAscii");

describe('convertTobase10', function () {
    describe('convert a number from base 2 or base 16 to base 10', function () {
        it('should convert small base2 numbers to base 10', function () {
            expect(convertToBase10('0b1100')).to.equal(12);
            expect(convertToBase10('0b0101')).to.equal(5);
            expect(convertToBase10('0b1000')).to.equal(8);
            expect(convertToBase10('0b0111')).to.equal(7);
        });

        it('should convert large base 2 numbers to base 10', function () {
            expect(convertToBase10('0b10100101')).to.equal(165);
            expect(convertToBase10('0b11111111')).to.equal(255);
            expect(convertToBase10('0b01010101')).to.equal(85);
            expect(convertToBase10('0b00110011')).to.equal(51)
        });

        it('should convert hexadecimal(base 16) numbers to base 10', function () {
            expect(convertToBase10('0xf')).to.equal(15);
            expect(convertToBase10('0xfa')).to.equal(250);
            expect(convertToBase10('0x1234')).to.equal(4660);
            expect(convertToBase10('0xc9a1')).to.equal(51617);
            expect(convertToBase10('0xbf12')).to.equal(48914);
        })
    })
})

describe('convertToBase2', function () {
    describe('convert a number from base 10 or base 16 to base 2', function () {
        it('should convert base 10 numbers to base 2', function () {
            expect(convertToBase2(4)).to.equal('0b100');
            expect(convertToBase2(65)).to.equal('0b1000001');
            expect(convertToBase2(256)).to.equal('0b100000000');
            expect(convertToBase2(123)).to.equal('0b1111011');
            expect(convertToBase2(1000)).to.equal('0b1111101000');
        });

        it('should convert base 16 numbers to base 2', function () {
            expect(convertToBase2('0xf')).to.equal('0b1111');
            expect(convertToBase2('0xfa')).to.equal('0b11111010');
            expect(convertToBase2('0x1234')).to.equal('0b1001000110100');
            expect(convertToBase2('0xc9a1')).to.equal('0b1100100110100001');
            expect(convertToBase2('0xbf12')).to.equal('0b1011111100010010');
        })
    })
})

describe('convertToBase16', function () {
    describe('convert a number from base 2 or base 10 to base 16', function () {
        it('should convert base 10 numbers to base 16', function () {
            expect(convertToBase16(4)).to.equal('0x4');
            expect(convertToBase16(65)).to.equal('0x41');
            expect(convertToBase16(256)).to.equal('0x100');
            expect(convertToBase16(123)).to.equal('0x7b');
            expect(convertToBase16(1000)).to.equal('0x3e8');
        });

        it('should convert small base 2 numbers to base 16', function () {
            expect(convertToBase16('0b1100')).to.equal('0xc');
            expect(convertToBase16('0b0101')).to.equal('0x5');
            expect(convertToBase16('0b1000')).to.equal('0x8');
            expect(convertToBase16('0b0111')).to.equal('0x7');
        });

        it('should convert larger base 2 numbers to base 16', function () {
            expect(convertToBase16('0b10100101')).to.equal('0xa5');
            expect(convertToBase16('0b11111111')).to.equal('0xff');
            expect(convertToBase16('0b01010101')).to.equal('0x55');
            expect(convertToBase16('0b00110011')).to.equal('0x33');
        })
    })
})

describe('asciiTo8bits', function () {
    describe('translates the input ascii strings to 8 bit binary strings', function () {
        it('should convert the input strings to 8-bits binary strings', function () {
            expect(asciiTo8bit('123')).to.equal('001100010011001000110011');
            expect(asciiTo8bit('ABC')).to.equal('010000010100001001000011');
            expect(asciiTo8bit('Hello, world!')).to.equal('01001000011001010110110001101100011011110010110000100000011101110110111101110010011011000110010000100001');
        })
    })
})

describe('binaryStringToArray', function () {
    describe('translates the input binary strings to ascii strings', function () {
        it('should convert the input string to ascii string', function () {
            expect(binaryToAscii('011000010110001001100011')).to.equal('abc');
            expect(binaryToAscii('010000010100001001000011')).to.equal('ABC');
            expect(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100')).to.equal('Hello, world');
        })
    })
})
