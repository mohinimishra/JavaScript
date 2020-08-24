/* Create a function called map that takes two inputs:

** an array of numbers (a list of numbers)
** a 'callback' function - a function that is applied to each element of the array (inside of the function 'map')
** Have map return a new array filled with numbers that are the result of using the 'callback' function on each element of the input array.

** map([1,2,3,4,5], multiplyByTwo); //-> [2,4,6,8,10]
** multiplyByTwo(1); //-> 2
multiplyByTwo(2); //-> 4 */

let multiplyByTwo = (num) => {
    return num * 2
}

let map = (arr, multiplyByTwo) => {
    let val = [];
    for (let i = 0; i < arr.length; i++) {
        let mul = multiplyByTwo(arr[i])
        val.push(mul)
    } return val
}

let value = map([2, 3, 4, 5], multiplyByTwo)
console.log(value)