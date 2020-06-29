// Return the Last Element in an Array/

// getLastItem([1, 2, 3]) ➞ 3

// getLastItem(["cat", "dog", "duck"]) ➞ "duck"

// getLastItem([true, false, true]) ➞ true

function getLastItem(array){
    let result = array[array.length-1]
    return result
}
console.log(getLastItem([1,2,3]))
console.log(getLastItem(["cat", "dog", "duck"]));
console.log(getLastItem([true, false, true]));

