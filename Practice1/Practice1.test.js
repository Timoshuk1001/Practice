const {
    isPalindrome,
    validArgument,
    isValidString,
    sumNumber,
    checkNumber } = require('./Practice1')

describe('isPalindrome', function () {
    test('check string to palindrome', function () {
        expect(isPalindrome('value')).toBe('false');
    });
    test('check string to palindrome', function () {
        expect(isPalindrome('assa')).toBe('true');
    });
});

describe('isValidString', function () {
    test('argument should be string', function () {
        expect(isValidString(2)).toBe('INVALID');
    });
    test('argument should be > 2 and < 20', function () {
        expect(isValidString('a')).toBe('INVALID');
    });
    test('argument should be > 2 and < 20', function () {
        expect(isValidString('afjhndklsheyrjndjuhasndhj')).toBe('INVALID');
    });
    test('argument should start with a letter', function () {
        expect(isValidString('!sdfh')).toBe('VALID');
    });
    test('argument should start with a letter', function () {
        expect(isValidString('sdfh')).toBe('INVALID');
    });
    test('argument should include one of symbol [,,!,:,-,?,., ]', function () {
        expect(isValidString('sdfh!')).toBe('VALID');
    });
    test('argument should include one of symbol [,,!,:,-,?,., ]', function () {
        expect(isValidString('sdfh:fsd')).toBe('VALID');
    });
    test('argument should include one of symbol [,,!,:,-,?,., ]', function () {
        expect(isValidString('sdfh-fsd')).toBe('VALID');
    });
    test('argument should include one of symbol [,,!,:,-,?,., ]', function () {
        expect(isValidString('sdfh?fsd')).toBe('VALID');
    });
    test('argument should include one of symbol [,,!,:,-,?,., ]', function () {
        expect(isValidString('sdfh.fsd')).toBe('VALID');
    });
    test('argument should include one of symbol [,,!,:,-,?,., ]', function () {
        expect(isValidString('sdfh fsd')).toBe('VALID');
    });
});

describe('sumNumber', function () {
    test('argument a should be string', function () {
        expect(sumNumber(2, 5)).toBe(false);
    });
    test('argument b should % 3 === 0, % 5 === 0, % 15 === 0', function () {
        expect(sumNumber('2', 15)).toBe(-13);
    });
    test('argument b should % 3 === 0, % 5 === 0, % 15 === 0', function () {
        expect(sumNumber('2', 7)).toBe('false');
    });
});

describe('checkNumber', function () {
    test('argument should be simple, > 0, even, % 10 === 0', function () {
        expect(checkNumber(2)).toStrictEqual([true, true, false]);
    });
    test('argument should be simple, > 0, even, % 10 === 0', function () {
        expect(checkNumber(10)).toStrictEqual([false, true, true]);
    });
    test('argument should be simple, > 0, even, % 10 === 0', function () {
        expect(checkNumber(11)).toStrictEqual([true, false, false]);
    });
    test('argument should be simple, > 0, even, % 10 === 0', function () {
        expect(checkNumber(-10)).toStrictEqual([false, true, true]);
    });
});

