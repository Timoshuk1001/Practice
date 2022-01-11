const { str, validator } = require('./script');


describe('str', () => {
    test('reverse str', () => {
        expect(str.reverse('abcde')).toBe('edcba');
    });
    test('reverse str', () => {
        expect(str.reverse('1234')).toBe('4321');
    });
    test('return srt start from upper case', () => {
        expect(str.ucFirst('abcde')).toBe('Abcde');
    });
    test('return arr of string from upper case', () => {
        expect(str.ucWords('abcde abcde abcde')).toBe('Abcde Abcde Abcde');
    });
});

describe('validator', function () {
    test('return valid email', function () {
        expect(validator.isEmail('timkshuk@gmail.com')).toBe(true);
    });
    test('return valid email', function () {
        expect(validator.isEmail('timkshuk@gmailcom')).toBe(false);
    });
    test('return valid domain', function () {
        expect(validator.isDomain('timkshuk.com')).toBe(true);
    });
    test('return valid domain', function () {
        expect(validator.isDomain('timkshukcom')).toBe(false);
    });
    test('return valid date', function () {
        expect(validator.isDate('01.10.1996')).toBe(true);
    });
    test('return valid date', function () {
        expect(validator.isDate('01.10.96')).toBe(false);
    });
    test('return valid phone', function () {
        expect(validator.isPhone('+380 (99) 950-51-01')).toBe(true);
    });
    test('return valid phone', function () {
        expect(validator.isPhone('+380999505101')).toBe(false);
    });
});