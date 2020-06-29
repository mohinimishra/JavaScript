// Filter Strings from Array

// filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

// filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

// filterArray(["Nothing", "here"]) ➞ []

function filterArray(array){
    let arr = [];
    for(let i=0; i<array.length; i++){
        if(typeof array[i]==='number'){
            arr.push(array[i])
        } 
}return arr
}
console.log(filterArray(["hello", 1,2, "mohini"]))

// console.log(typeof 4)