// // The function forEach takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.
// let alphabet = '';
// const letters = ['a', 'b', 'c', 'd'];
// forEach(letters, function(char) {
//   alphabet += char;
// });
// console.log(alphabet);   //prints 'abcd'


let forEach = (letters, char) => {
    return char(letters)
}
let val = ''
forEach(['a', 'b', 'c', 'd'], function (n) {
    val = `'${n.join('')}'`
})

console.log(val)