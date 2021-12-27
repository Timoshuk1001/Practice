function returnNumbers(x) {
    let result = '';

    for (let i = 1; i <= x; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result = result.concat('threeFive ');
        } else if (i % 3 === 0) {
            result = result.concat('three ');
        } else if (i % 5 === 0) {
            result = result.concat('five ')
        } else {
            result = result.concat(`${i} `);
        }
    }
    return result;
}
const res = returnNumbers(20);

console.log(res);

function outOfCycle () {
    let result = '';
    for (let i = 0; i <= 15; i++) {
     for (let j = 0; j < 20; j++) {
         if (i === 15 && j === 15) {
             break;
         }
         result = result + `${i}, ${j}\n`;
  }
 }
    return result;
}

console.log(outOfCycle())

// outOfCycle();

function char(str) {
    let charObj = {};

    for (let char of str.replace(/[^\w]/g).toLowerCase()) {
        charObj[char] = charObj[char] + 1 || 1;
    }
    return charObj;
}

function isAnagram(strA, strB) {
    let charA = char(strA);
    let charB = char(strB);

    if (Object.keys(charA).length !== Object.keys(charB).length) {
        return false;
    }

    for (let char in charA) {
        if (charA[char] !== charB[char]) {
            return false;
        }
    }
    return true;
}

// console.log(isAnagram('is it', 'it is'))

module.exports = {
    returnNumbers,
    outOfCycle,
    isAnagram
}