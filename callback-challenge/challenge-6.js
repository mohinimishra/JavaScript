// The function reduce takes an array and reduces the elements to a single value. For example it can sum all the numbers, multiply them, or any operation that you can put into a function.

// const nums = [4, 1, 3];
// const add = function(a, b) { return a + b; }
// reduce(nums, add, 0);   //-> 8

let addition = (a, b) => {
    return a + b
}

let reduce = (array, add, reducer) => {
    for (let i = 0; i < array.length; i++) {
        let addition = add(reducer, array[i])
        reducer = addition;
    } return reducer
}

console.log(reduce([4, 1, 3, 5], addition, 0))