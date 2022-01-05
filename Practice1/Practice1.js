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


function isSymbol(char) {
    return ',.!:-_? '.includes(char)

}

function checkSymbols(str) {
    return [',', '.', '!', ':', '-', '_', '?', ' '].some((symbol) => str.includes(symbol));

}

function isValidString(str) {
    if (str || typeof str === 'string') {
        if (str.length >= 2 && str.length <= 20 && checkSymbols(str) && (!isSymbol(str[0]) || str[0] === str[0].toUpperCase())) {
            return 'VALID';
        } else {
            return 'INVALID';
        }
    }

    return 'incorrect input data';
}

console.log(isValidString('add!'));

console.log(isValidString('Sfsdf!'))

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
    //validArgument,
    isValidString,
    sumNumber,
    checkNumber
}