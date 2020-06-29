// Reverse an Array
// reverse([1, 2, 3, 4]) ➞ [4, 3, 2, 1]

// reverse([9, 9, 2, 3, 4]) ➞ [4, 3, 2, 9, 9]

// reverse([]) ➞ []


function reverseArray(array){
    for(let i=0; i<(array.length-1)/2; i++){
       let arrayValue = array[i];
        array[i] = array[array.length-i-1]
        array[array.length-i-1] = arrayValue
    } return array
}
console.log(reverseArray([1,2,3,4]))
console.log(reverseArray([9,9,2,3,4]))
console.log(reverseArray([]))

