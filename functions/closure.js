// A function which remember its scope//
function sum(a) {
    return function(){
        return a+5
    }
}
let add = sum(5)
console.log(add())