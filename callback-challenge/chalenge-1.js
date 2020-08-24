// Create a function addTwo that accepts one input and adds 2 to it.

// 1st method
// let addTwo = (num) => {
//     return num + 2
// }
// console.log(addTwo(2))

// 2nd Method

function addTwo(num, cb) {
    return cb(num)
}
let value = addTwo(2, function (n) {
    return n + 2;
})
console.log(value)
