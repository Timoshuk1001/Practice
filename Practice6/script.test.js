const { intersectionObj,
    uniqueArr,
    isEmpty,
    isDeepEqual,
    bindExample } = require('./script')

describe('intersectionObj', function () {
    test('search intersection in objects', function (){
        expect(intersectionObj({ a: 1, b: 2 }, { c: 1, b: 2 })).toStrictEqual({ b: 2 });
    });
});

describe('uniqueArr', function () {
    test('return unique array', function () {
        expect(uniqueArr([1, 2, 3, 2, 1])).toStrictEqual([1, 2, 3]);
    });
});

describe('isEmpty', function () {
    test('check object for empty', function () {
        expect(isEmpty({})).toStrictEqual(true);
    });
    test('check object for empty', function () {
        expect(isEmpty({a: undefined})).toStrictEqual(true);
    });
    test('check object for empty', function () {
        expect(isEmpty({a: 1})).toStrictEqual(false);
    });
});

describe('isDeepEqual', function () {
    test('check obj deep equal', function () {
        expect(isDeepEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } })).toBe(true);
    });
    test('check obj deep equal', function () {
        expect(isDeepEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { d: 1 } })).toBe(false);
    });
    test('check obj deep equal', function () {
        expect(isDeepEqual({}, {})).toBe(true);
    });
    test('check obj deep equal', function () {
        expect(isDeepEqual({a: 'd'}, {a: 'd'})).toBe(true);
    });
});

describe('bindExample', function () {
    test('bind person name and ', function () {
        expect(bindExample()).toStrictEqual();
    });
});