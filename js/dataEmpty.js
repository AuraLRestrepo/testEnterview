// Examples for testing the function can be declared.
const data = { "a": 100, "b": 200 };
const data2 = { "hey": "a", "hi": "b", "bye": "c" };
const data3 = {};
const data4 = [1, 2, 3, 4, 5];
const data5 = [];
const data6 = null;
const data7 = undefined;

const isEmpty = (data) => {
    // The first condition validates whether the data is null or undefined
    if (data === null || data === undefined) {
        return true;
    }

    // The second condition validates whether the data is an object and if the object's keys have a length of 0
    if (typeof data === 'object' && Object.keys(data).length === 0) {
        return true;
    }    

    return false;
}

// The result of the function depends on the outcome of these conditions
console.log(isEmpty(data));
console.log(isEmpty(data2));
console.log(isEmpty(data3));
console.log(isEmpty(data4));
console.log(isEmpty(data5));
console.log(isEmpty(data6));
console.log(isEmpty(data7));
