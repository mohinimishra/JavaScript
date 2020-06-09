// var num = 12134;
// var total = 0;

// while(num!=0){
//     num = parseInt(num/10);
//     total++;
// }
// console.log('tot',total)

// var num = 121;
// var reverse = 0;
// var remainder;
// var temp = num;

// while(num!=0){
//     remainder = num % 10;
//     reverse = reverse * 10 + remainder;
//     num = parseInt(num/10)
// }

// if(temp == reverse){
//     console.log('Palindrome')
// }else{
//     console.log('NP')
// }   


// var temp =0;
// for (i=1; i<100; i++) {
//     if (num % i == 0){
//         temp =  temp + i;
//     }
// }
// if (temp == num){
//     console.log("Perfect no")
// } else {
//     console.log("not perfect no.")
// }

// for (i=1; i<=100; i++) {
//     if (i%2==0) {
//         console.log(i)
//     }
// }


// for (i=1; i<=100; i++) {
//     var temp =0;
//     for(j=1; j<=100; j++){
//         if (i % j== 0) {
//             temp = temp + j
//         }
    
//     }
// }if (temp == i) {
//     console.log(i)
// }



var perfectNumbers = []

for(var i = 1; i <=1000; i++){
    var temp = 0;
    for (var j = 1; j<i; j++){
        if(i%j == 0){
            temp += j;
        }
    }
    if(temp == i){
        console.log(i)
        perfectNumbers.push(i)
    }
}

console.log(perfectNumbers)






perfectNumbers(500,1000)







