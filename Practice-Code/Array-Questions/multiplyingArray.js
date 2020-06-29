// Multiply Every Array Item by Two

// getMultipliedArr([2, 5, 3]) ➞ [4, 10, 6]

// getMultipliedArr([1, 86, -5]) ➞ [2, 172, -10]

// getMultipliedArr([5, 382, 0]) ➞ [10, 764, 0]

function getMultipliedArr(array){
    let arr = [];
    for(let i=0; i<array.length; i++){
        arr.push(array[i]*2)
    }return arr
}

console.log(getMultipliedArr([2,5,3]))
console.log(getMultipliedArr([1, 86, -5]));
console.log(getMultipliedArr([5, 382, 0]));

function getmulArr(arr1){
    let array1 =[];
    let i =0;
    do{
        array1.push(arr1[i]*2)
        i++
    } while(i<arr1.length)
    return array1
}
console.log(getmulArr([1,2,3]))
