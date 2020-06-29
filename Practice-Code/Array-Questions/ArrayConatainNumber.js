// Check if an Array Contains a Given Number

// check([1, 2, 3, 4, 5], 3) ➞ true

// check([1, 1, 2, 1, 1], 3) ➞ false

// check([5, 5, 5, 6], 5) ➞ true

// check([], 5) ➞ false

function check(array, number) {
    // for (let i = 0; i < array.length; i++) {
    //     if (number === array[i]) {
    //         return true
    //     } 
    // }
    // return false
    return array.filter(el => el == number)[0] ? true : false
}
    let result = check([1, 2, 3, 4, 5], 6);

    console.log(result)