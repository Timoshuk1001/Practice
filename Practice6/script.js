// 1) Напишите функцию, которая поверхностно находит пересечения объектов и
// возвращает объект пересечений.
//     Ожидаемый результат: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }

function intersectionObj(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);

    return obj1Keys.reduce((acc = {}, key) => {
        if (obj1[key] === obj2[key]) {
            acc = {
                ...acc,
                [key]: obj1[key],
            };
        }
        return acc;
    }, {});
};

console.log(intersectionObj({ a: 1, b: 2 }, { c: 1, b: 2 }))

// Напишите функцию, которая делает глубокое сравнение объектов.
//     Ожидаемый результат: True если объекты идентичны ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

function isDeepEqual(obj1, obj2) {
    const obj1Keys = Object.keys(obj1);
    const obj2Keys = Object.keys(obj2);

    if (obj1Keys.length === 0 && obj2Keys.length === 0) {
        return true;
    }

    const compare = obj1Keys.map((key) => {
        const valueObj1 = obj1[key];
        const valueObj2 = obj2[key];
        if ((Number.isNaN(valueObj1) && Number.isNaN(valueObj2))
            || (valueObj1 === null && valueObj2 === null)) {
            return true;
        }
        if (valueObj1 === valueObj2) {
            return true;
        }
        if (typeof valueObj1 === 'object' && typeof valueObj2 === 'object') {
            return isDeepEqual(valueObj1, valueObj2);
        }
        if (Array.isArray(valueObj1) && Array.isArray(valueObj2)) {
            return isArraysDeepEqual(valueObj1, valueObj2)
        }

        return false;
    });
    return !compare.includes(false) && !compare.includes(undefined);
};

function isArraysDeepEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    const compared = arr1.map((elem, id) => {
        if (Array.isArray(elem) && Array.isArray(arr2[id])) {
            return isArraysDeepEqual(elem, arr2[id]);
        }
        if (typeof elem === 'object' && typeof arr2[id] === 'object') {
            return isDeepEqual(elem, arr2[id]);
        }

        return arr2[id] === elem;
    });
    return !compared.includes(false);
};

console.log(isDeepEqual({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }))


// Напишите функцию, которая убирает повторяющиеся значения в массиве.
//     Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

function uniqueArr(arr) {
    let result = [];

    for (let i = 1; i < arr.length - 1; i++) {
        if (!result.includes(i)) {
            result.push(i);
        };
    };
    return result;
};

console.log(uniqueArr([1, 2, 3, 1, 2]))

// Напишите функцию, которая делает поверхностную проверку объекта на пустоту.
//     Ожидаемый результат: ({}) => true,
//     ({ a: undefined }) => true,
//     ({ a: 1 }) => false

function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    return !Object.keys(obj).filter((key) => obj[key] || obj[key] === 0 || obj[key] === false).length
};

console.log(isEmpty({a: undefined}));
console.log(isEmpty({a: 1}));
console.log(isEmpty({}))

// Напишите свою реализацию метода bind

function bindExample() {
    const person = {
        name: 'Tim',
        age: 25,
        func: function (){
            console.log(`Name is ${this.name}`);
            console.log(`Age is ${this.age}`);
        }
    }

    const person2 = {
        name: 'Maxim',
        age: 27,
    }

    person.func.bind(person2)();
}

const res = bindExample();

console.log(res);


module.exports = {
    intersectionObj,
    uniqueArr,
    isEmpty,
    isDeepEqual,
    bindExample
}