// Find the Index

// search([1, 2, 3, 4], 3) ➞ 2

// search([2, 4, 6, 8, 10], 8) ➞ 3

// search([1, 3, 5, 7, 9], 11) ➞ -1

function search(array, number){
    for(let i=0; i<array.length; i++){
        if(number===array[i]){
            return i
        }
    }
    return -1
}

var value = search([1,2,3,4],5);
console.log(value)


