// Get the Sum of All Array Elements

// getSumOfItems([2, 7, 4]) ➞ 13

// getSumOfItems([45, 3, 0]) ➞ 48

// getSumOfItems([-2, 84, 23]) ➞ 105

function getSumOfItems(array){
    let sum = 0;
    for(let i =0; i<array.length; i++){
        sum += array[i];
    }
    return sum
}
console.log(getSumOfItems([2,7,4]))