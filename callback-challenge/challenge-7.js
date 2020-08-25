// Construct a function intersection that compares input arrays and returns a new array with elements found in all of the inputs. BONUS: Use reduce!

/*
1st method
    const myArr = [[1, 2, 3, 4], [2, 3, 4, 5], [3, 4, 5, 6]];
    let value = myArr.reduce((a, arr) => (
    a.filter((num) => arr.includes(num))
))
console.log(value)
*/


/*  2nd way
let intersection = myArr.forEach((e, ind, arr) => {
    e.filter((num) => {
        arr.includes(num)
    })
})
*/

function intersection(...arrays) {
    let value = arrays.reduce((a, arr) => (
        a.filter((num) => arr.includes((num)))
    ))
    return value
}


console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));

