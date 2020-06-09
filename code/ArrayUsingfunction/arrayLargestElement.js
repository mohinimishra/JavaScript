// FIND LARGEST ELEMENT IN ARRAY //

function array(arr) {
    var largest = arr[0];
    for(let i=1; i<arr.length; i++) {
        if(arr[i] > largest) {
            largest = arr[i]
        }
    } return largest
}
let arr = array([10,4,6,19,20,4]);
console.log("Greatest  element in array is :", arr)