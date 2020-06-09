// Function which is capable to return the function , able to accept a function as an argument//

function foo(){
    return function(){
        return "there"
    }
}

let value = foo()
console.log(value)

// Accept function in arguments(callback)//

function add(a,b,cb){
    let res = a +b
    let final = cb(res)
    return final
}
let square = add(2,3, function(n){
        return n+n
})
console.log(square)
