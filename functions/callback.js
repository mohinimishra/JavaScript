function hello (a, b, cb){
    console.log(a)
    console.log(b)
    cb()
}

hello(2,3, function(){
    console.log("hii")
})

function add(a,b, cb){
    var result = a + b;
    return cb(result)
}
var value = add(2,4, function(n){
    return n*n
})
console.log(value)