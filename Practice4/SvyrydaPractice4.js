function sumElem (arr, x) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++){
            if (i !== j && arr[i] + arr[j] === x){
                return true;
            }
        }
    }
    return false;
}

console.log(sumElem([1, 2, 4, 4], 8))

function transformArr(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(transformArr(arr[i]));
        } else result.push(arr[i]);
    }
    return result;
}

console.log(transformArr([1, 2, [3, 4, [5]]]))

function divideArr(arr, size) {
    const divide = [];
    let index = 0;
    while (index < arr.length) {
        divide.push(arr.slice(index, size + index));
        index += size;
    }
    return divide;
}

console.log(divideArr([1,2,3,4,5], 3))

function isEqual(a, b) {
    for (let key in a) {
        if(!(key in b) || a[key] !== b[key]) {
            return false;
        }
    }
    for (let key in b) {
        if (!(key in a) || a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

console.log(isEqual({a:1 , b: 1}, {a:1 , b: 1}))