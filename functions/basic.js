 // Syntax
/*

    function functionName (arguments..){
        // function body
    }



*/

// function test() {
//     console.log('First Function')
// }

// test();

// var a = 10;
// var b = 20;

// console.log(a+b);
// A function can return only and only one value;
// A function always returns a value,
//  If you are not returning anything, then it will return undefined

// function definition
// function add (a,b,c,d) {
//     // console.log(d)
//     var result = 0
//     if(a && b && c && d){
//         result = a+b+c+d
//     }else if (a && b && c ){
//         result = a+b+c
//     }else {
//         result = a+b
//     }
//     // console.log(result);
//     return result
// }

function add(){
    var res = 0;
    for (var i =0; i<arguments.length;i++){
        res += arguments[i];
    }
    return res;

    console.log('hello')
}


var firstAddition = add(2,4,10,20,10,0,10,20);

console.log(firstAddition)

var secondAddition = add(10,20,20);

console.log(secondAddition);

var thirdAdd = add(2,3);

console.log(thirdAdd)



function foo(){
    // arguments keyword is available inside function only
    // its an object (arraylike- object)
    // And it hold all the parameters in array manner
    // We can access it too as an array.

    console.log('arguments',arguments);
    var res = 0
    for (var i =0; i<arguments.length; i++){
        res += arguments[i]
    }
    return res
}

console.log(foo(2,3))