// Function behaves like data
// foo()

// const foo = function () {
//     console.log('I m foo')
// }


// If we give name to function exp it is known Named Function Expression(NFS)


// foo();

// Anonymous Function

// 1 .Self Calling Function
// 2. Callbacks


// Self Calling Functions

// (function (){
//     console.log("hii")
// })()


// (function (arg) {
//     console.log(arg+' I am anonymous')
// })('Hi')

// // 2 Callbacks


// function zoo () {
//     console.log('I am callback')
// }

// var g = 10






// function hello (a,b,cb) {
//     console.log(a);
//     console.log(b);
//     cb();
// }

// hello(g,3,function() {console.log('I m anonymous callback')});






// function add (a,b,cb) {
//     var res = a+b;

//     return cb(res);//25
// }


// var f = add(2,3,function (n) { return n*n})

// console.log(f);

// var q = add(2,3,function (n) { return n*n*n})
// console.log(q)


// // Fat Arrow


// const fooo = function (a,b) {
//     return a+b;
// } 


// // const sum = (a,b) => {

// //     return a+b
// // }

// const sum = (a,b) => a+b

// console.log(sum(2,3));

// const c = () => 'No arguments';

// console.log(c())

// const square = n => n*n

// console.log(square(6))