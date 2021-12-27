const {
    returnNumbers,
    outOfCycle,
    isAnagram } = require('./SvyrydaPractice2')

describe('returnNumbers', function () {
    test('should return 1 2 three 4 five three ', function () {
        expect(returnNumbers(6)).toBe('1 2 three 4 five three ')
    });
});

describe('outOfCycle', function () {
    test('should stop on 15 14', function () {
        expect(outOfCycle()).toBe('0, 0\n' +
            '0, 1\n' +
            '0, 2\n' +
            '0, 3\n' +
            '0, 4\n' +
            '0, 5\n' +
            '0, 6\n' +
            '0, 7\n' +
            '0, 8\n' +
            '0, 9\n' +
            '0, 10\n' +
            '0, 11\n' +
            '0, 12\n' +
            '0, 13\n' +
            '0, 14\n' +
            '0, 15\n' +
            '0, 16\n' +
            '0, 17\n' +
            '0, 18\n' +
            '0, 19\n' +
            '1, 0\n' +
            '1, 1\n' +
            '1, 2\n' +
            '1, 3\n' +
            '1, 4\n' +
            '1, 5\n' +
            '1, 6\n' +
            '1, 7\n' +
            '1, 8\n' +
            '1, 9\n' +
            '1, 10\n' +
            '1, 11\n' +
            '1, 12\n' +
            '1, 13\n' +
            '1, 14\n' +
            '1, 15\n' +
            '1, 16\n' +
            '1, 17\n' +
            '1, 18\n' +
            '1, 19\n' +
            '2, 0\n' +
            '2, 1\n' +
            '2, 2\n' +
            '2, 3\n' +
            '2, 4\n' +
            '2, 5\n' +
            '2, 6\n' +
            '2, 7\n' +
            '2, 8\n' +
            '2, 9\n' +
            '2, 10\n' +
            '2, 11\n' +
            '2, 12\n' +
            '2, 13\n' +
            '2, 14\n' +
            '2, 15\n' +
            '2, 16\n' +
            '2, 17\n' +
            '2, 18\n' +
            '2, 19\n' +
            '3, 0\n' +
            '3, 1\n' +
            '3, 2\n' +
            '3, 3\n' +
            '3, 4\n' +
            '3, 5\n' +
            '3, 6\n' +
            '3, 7\n' +
            '3, 8\n' +
            '3, 9\n' +
            '3, 10\n' +
            '3, 11\n' +
            '3, 12\n' +
            '3, 13\n' +
            '3, 14\n' +
            '3, 15\n' +
            '3, 16\n' +
            '3, 17\n' +
            '3, 18\n' +
            '3, 19\n' +
            '4, 0\n' +
            '4, 1\n' +
            '4, 2\n' +
            '4, 3\n' +
            '4, 4\n' +
            '4, 5\n' +
            '4, 6\n' +
            '4, 7\n' +
            '4, 8\n' +
            '4, 9\n' +
            '4, 10\n' +
            '4, 11\n' +
            '4, 12\n' +
            '4, 13\n' +
            '4, 14\n' +
            '4, 15\n' +
            '4, 16\n' +
            '4, 17\n' +
            '4, 18\n' +
            '4, 19\n' +
            '5, 0\n' +
            '5, 1\n' +
            '5, 2\n' +
            '5, 3\n' +
            '5, 4\n' +
            '5, 5\n' +
            '5, 6\n' +
            '5, 7\n' +
            '5, 8\n' +
            '5, 9\n' +
            '5, 10\n' +
            '5, 11\n' +
            '5, 12\n' +
            '5, 13\n' +
            '5, 14\n' +
            '5, 15\n' +
            '5, 16\n' +
            '5, 17\n' +
            '5, 18\n' +
            '5, 19\n' +
            '6, 0\n' +
            '6, 1\n' +
            '6, 2\n' +
            '6, 3\n' +
            '6, 4\n' +
            '6, 5\n' +
            '6, 6\n' +
            '6, 7\n' +
            '6, 8\n' +
            '6, 9\n' +
            '6, 10\n' +
            '6, 11\n' +
            '6, 12\n' +
            '6, 13\n' +
            '6, 14\n' +
            '6, 15\n' +
            '6, 16\n' +
            '6, 17\n' +
            '6, 18\n' +
            '6, 19\n' +
            '7, 0\n' +
            '7, 1\n' +
            '7, 2\n' +
            '7, 3\n' +
            '7, 4\n' +
            '7, 5\n' +
            '7, 6\n' +
            '7, 7\n' +
            '7, 8\n' +
            '7, 9\n' +
            '7, 10\n' +
            '7, 11\n' +
            '7, 12\n' +
            '7, 13\n' +
            '7, 14\n' +
            '7, 15\n' +
            '7, 16\n' +
            '7, 17\n' +
            '7, 18\n' +
            '7, 19\n' +
            '8, 0\n' +
            '8, 1\n' +
            '8, 2\n' +
            '8, 3\n' +
            '8, 4\n' +
            '8, 5\n' +
            '8, 6\n' +
            '8, 7\n' +
            '8, 8\n' +
            '8, 9\n' +
            '8, 10\n' +
            '8, 11\n' +
            '8, 12\n' +
            '8, 13\n' +
            '8, 14\n' +
            '8, 15\n' +
            '8, 16\n' +
            '8, 17\n' +
            '8, 18\n' +
            '8, 19\n' +
            '9, 0\n' +
            '9, 1\n' +
            '9, 2\n' +
            '9, 3\n' +
            '9, 4\n' +
            '9, 5\n' +
            '9, 6\n' +
            '9, 7\n' +
            '9, 8\n' +
            '9, 9\n' +
            '9, 10\n' +
            '9, 11\n' +
            '9, 12\n' +
            '9, 13\n' +
            '9, 14\n' +
            '9, 15\n' +
            '9, 16\n' +
            '9, 17\n' +
            '9, 18\n' +
            '9, 19\n' +
            '10, 0\n' +
            '10, 1\n' +
            '10, 2\n' +
            '10, 3\n' +
            '10, 4\n' +
            '10, 5\n' +
            '10, 6\n' +
            '10, 7\n' +
            '10, 8\n' +
            '10, 9\n' +
            '10, 10\n' +
            '10, 11\n' +
            '10, 12\n' +
            '10, 13\n' +
            '10, 14\n' +
            '10, 15\n' +
            '10, 16\n' +
            '10, 17\n' +
            '10, 18\n' +
            '10, 19\n' +
            '11, 0\n' +
            '11, 1\n' +
            '11, 2\n' +
            '11, 3\n' +
            '11, 4\n' +
            '11, 5\n' +
            '11, 6\n' +
            '11, 7\n' +
            '11, 8\n' +
            '11, 9\n' +
            '11, 10\n' +
            '11, 11\n' +
            '11, 12\n' +
            '11, 13\n' +
            '11, 14\n' +
            '11, 15\n' +
            '11, 16\n' +
            '11, 17\n' +
            '11, 18\n' +
            '11, 19\n' +
            '12, 0\n' +
            '12, 1\n' +
            '12, 2\n' +
            '12, 3\n' +
            '12, 4\n' +
            '12, 5\n' +
            '12, 6\n' +
            '12, 7\n' +
            '12, 8\n' +
            '12, 9\n' +
            '12, 10\n' +
            '12, 11\n' +
            '12, 12\n' +
            '12, 13\n' +
            '12, 14\n' +
            '12, 15\n' +
            '12, 16\n' +
            '12, 17\n' +
            '12, 18\n' +
            '12, 19\n' +
            '13, 0\n' +
            '13, 1\n' +
            '13, 2\n' +
            '13, 3\n' +
            '13, 4\n' +
            '13, 5\n' +
            '13, 6\n' +
            '13, 7\n' +
            '13, 8\n' +
            '13, 9\n' +
            '13, 10\n' +
            '13, 11\n' +
            '13, 12\n' +
            '13, 13\n' +
            '13, 14\n' +
            '13, 15\n' +
            '13, 16\n' +
            '13, 17\n' +
            '13, 18\n' +
            '13, 19\n' +
            '14, 0\n' +
            '14, 1\n' +
            '14, 2\n' +
            '14, 3\n' +
            '14, 4\n' +
            '14, 5\n' +
            '14, 6\n' +
            '14, 7\n' +
            '14, 8\n' +
            '14, 9\n' +
            '14, 10\n' +
            '14, 11\n' +
            '14, 12\n' +
            '14, 13\n' +
            '14, 14\n' +
            '14, 15\n' +
            '14, 16\n' +
            '14, 17\n' +
            '14, 18\n' +
            '14, 19\n' +
            '15, 0\n' +
            '15, 1\n' +
            '15, 2\n' +
            '15, 3\n' +
            '15, 4\n' +
            '15, 5\n' +
            '15, 6\n' +
            '15, 7\n' +
            '15, 8\n' +
            '15, 9\n' +
            '15, 10\n' +
            '15, 11\n' +
            '15, 12\n' +
            '15, 13\n' +
            '15, 14\n');
    });
});

describe('isAnagram', function () {
    test('arguments is anagram', function () {
        expect(isAnagram('is it', 'it is')).toBe(true);
    });
    test('arguments is anagram', function () {
        expect(isAnagram('it it', 'is it')).toBe(false);
    });
});