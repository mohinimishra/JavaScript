
// let array = [3,4,2,3,4];

// const removeDuplicate = function(arr){
//     let cache = {}; 
//     let uniqueArr = [];

//     for(let i =0; i< arr.length; i++) {
//         if(!cache[arr[i]]){
//             cache[arr[i]] = true;
//             uniqueArr.push(arr[i])
//         }
//     }
//     return uniqueArr;
// }
// console.log(removeDuplicate(array))

function removeDuplicate(arr) {
    let obj = {};
    let array1 = [];

    for(let i = 0; i < arr.length; i++){
        if(!obj[arr[i]]) {
            obj[arr[i]] = true;
            array1.push(arr[i])
        }
    }
    return array1
}
var arr = removeDuplicate([3,7,3,4,5,4,6,7,4])
console.log(arr)








