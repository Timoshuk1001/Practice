const {
    sumElem,
    transformArr,
    divideArr,
    isEqual } = require('./SvyrydaPractice4')

describe('sumElem', function () {
    test('should return false', function (){
        expect(sumElem([1, 2, 3, 4], 8)).toBe(false);
    });
    test('shold return true', function () {
        expect(sumElem([1, 2, 6, 5], 8)).toBe(true);
    });
});

describe('transformArr', function () {
    test('transform deep array to one-dimensional', function () {
        expect(transformArr([1, 2, [3, 4, [5]]])).toStrictEqual([1, 2, 3, 4, 5]);
    });
    test('transform deep array to one-dimensional', function () {
        expect(transformArr([1, 2, [3, 4, 5]])).toStrictEqual([1, 2, 3, 4, 5]);
    });
});

describe('divideArr', function (){
    test('divides the array', function () {
        expect(divideArr([1,2,3,4,5], 3)).toStrictEqual([[1,2,3], [4,5]]);
    });
    test('divides the array', function () {
        expect(divideArr([1,2,3,4,5], 2)).toStrictEqual([[1,2], [3,4], [5]]);
    });
});

describe('isEqual', function () {
    test('compare arrays', function () {
        expect(isEqual({a:1 , b: 1}, {a:1 , b: 1})).toBe(true);
    });
    test('compare arrays', function () {
        expect(isEqual({a:1 , c: 1}, {a:1 , b: 1})).toBe(false);
    });
});