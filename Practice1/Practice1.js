function isPalindrome(str) {
    let result = '';

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[str.length - 1 - i]) {
            result = 'true';
        } else result = 'false';
    }
    return result;
}

console.log(isPalindrome('adassss'))

function validArgument(a) {
    let result = '';

    if (typeof a !== 'string') {
        result = 'incorrect input data';

        return result;
    }

    if (a.length > 2 && a.length < 20) {
        result = 'VALID';
    } else {
        result = 'INVALID';
        return result;
    }


    if (a[0] === a[0].toUpperCase() && a.includes(',') || a.includes('!') || a.includes(':') || a.includes('-') || a.includes('?') || a.includes('.') || a.includes(' ')) {
        result = 'VALID';
    } else {
        result = 'INVALID';
        return result;
    }

    if (a[0] === ',' || a[0] === '!' || a[0] === ':' || a[0] === '-' || a[0] === '?' || a[0] === '.' || a[0] === ' ') {
        result = 'INVALID';
    } else {
        result = 'VALID';

        return result;
    }


    return result;
}

console.log(validArgument('add!'));

console.log(validArgument('Sfsdf!'))

function sumNumber(a, b) {
    let result = 0;

    if (typeof a !== 'string') {
        return false;
    }

    if (b % 3 === 0 && b % 5 === 0 && b % 15 === 0) {
        b = b * -1;
        result = +a + b;
    } else result = 'false';
    return result;
}

console.log(sumNumber('2', 15))

function checkNumber(value) {
    let prime = [true];
    let even = [];
    let multiples = [];
    let result = [];

    for (let i = 2; i < value; i++) {
        if (value % i === 0) {
            prime = [false];
        }
    }
    if (value < 0) {
        prime = [false];
    }

    if (value % 2 === 0) {
        even = [true];
    } else even = [false];

    if (value % 10 === 0) {
        multiples = [true];
    } else multiples = [false];

    return result = prime.concat(even, multiples);
}

console.log(checkNumber(11))


module.exports = {
    isPalindrome,
    validArgument,
    sumNumber,
    checkNumber
}