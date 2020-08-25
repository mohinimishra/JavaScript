// In the first part of this challenge, you're going to rebuild map as mapWith. This time you're going to use forEach inside of mapWith instead of using a for loop.

let multiplyByTwo = n => {
    return n * 2
}

let value;
let temp = [];

let mapWith = function (array, multiplyByTwo) {

    array.forEach((ele) => {
        let mul = multiplyByTwo(ele)
        temp.push(mul)
    })
    return (temp)
}

console.log(mapWith([2, 3], multiplyByTwo))

