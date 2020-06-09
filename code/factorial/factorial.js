// var n = 6;
// var m =1;

// // for(i=n; i>1; i--){
// //     m = m * (i-1);

// for(i=2; i<=n; i++){
//     m = m * i
// }

// console.log("factorial of", n ,"is:", m)

function factorial(n) {
    let m = 1;
    for(let i=2; i<=n; i++){
        m = m * i;
    } return `Factorial of ${n} : ${m}`
}

 
console.log(factorial(5))