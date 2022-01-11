class MyString {
    constructor() {
    }
    reverse(str) {
        let reversed = '';
        for (let i = str.length - 1; i >= 0; i--) {
            reversed = reversed + str[i];
        }
        return reversed;
    }
    ucFirst(str) {
        let toUpper = str[0].toUpperCase() + str.slice(1);
        return toUpper;
    }
    ucWords(str) {
        let arr = str.split(' ');
        let newArr = [];

        for (let i = 0; i < arr.length; i++) {
            let a = arr[i];
            let newStr = a[0].toUpperCase() + a.slice(1);
            newArr.push(newStr);
        }
        return newArr.join(' ');
    }
}

let str = new MyString();

console.log(str.reverse('abcde'));
console.log(str.ucFirst('abcde'));
console.log(str.ucWords('abcde abcde abcde'));

class Validator {
    constructor() {
    }
    isEmail(str) {
        let email = str.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        //return email.test(String(str).toLowerCase());
        return email === null ? false : true;
    }
    isDomain(str) {
        let domain = str.match(/^([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
        return domain === null ? false : true;
    }
    isDate(str) {
        let date = str.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/);
        return date === null ? false : true;
    }
    isPhone(str) {
        let phone = str.match(/\+380\ \([0-9]{2}\)\ [0-9]{3}-[0-9]{2}-[0-9]{2}/);
        return phone === null ? false : true;
    }
}

let validator = new Validator()

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+380 (29) 817-68-92'));

module.exports = { str, validator };