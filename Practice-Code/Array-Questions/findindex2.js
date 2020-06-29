// search([1, 2, 3, 4], 3) ➞ 2

// search([2, 4, 6, 8, 10], 8) ➞ 3

// search([1, 3, 5, 7, 9], 11) ➞ -1
function findIndex(arr, str) {
	for(var i = 0; i < arr.length; i++){
		if(arr[i] == str){
			return i
		}
	}
}
let value = findIndex(["hii", "hello", "mm", "mohini"], "hello")
console.log(value)