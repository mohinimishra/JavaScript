// // Add the Index

// // addIndexes([0, 0, 0, 0, 0]) ➞ [0, 1, 2, 3, 4]

// // addIndexes([1, 2, 3, 4, 5]) ➞ [1, 3, 5, 7,/ 9]

// // addIndexes([5, 4, 3, 2, 1]) ➞ [5, 5, 5, 5, 5]

// function addIndexes(array){
//     let sum;
//     for(let i = array.length-1; i>=0; i--){
//         let add = array[array.length-1];
//         sum = add - i
//     }
// }


let sl =[5, 4, 3, 7, 6, 9]
let b= sl.slice(1,4)
console.log(b)

let sp = [10,20,30,40]
let e = sp.splice(1, 2)
console.log(e)