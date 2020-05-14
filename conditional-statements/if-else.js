var num = 600;

console.log(num == 500)

if(num == 500){
    console.log('Number has the value 500')
} else {
    console.log('Number has the value ',num)
}



/*
    Price = 600 - 50
    Price = 800 - 100
    Gt - 1000 200
*/

var amount = 950;

// if(amount == 600) {
//     console.log('Total Price = ', amount-50)
// } else if (amount == 800) {
//     console.log('Total amount is ',amount-100)
// }else {
//     console.log('Total amount ', amount-200)
// }



if (amount >= 600 && amount < 800){
    console.log('Total Price ',amount-50)
} else if (amount >=800 && amount < 1000) {
    console.log('Total price', amount-100)
} else if(amount >= 1000) {
    console.log ('Total price', amount-200)
}else {
    console.log('total price ',amount)
}


var name = 'ashu';

var x = 0 ;

if(x){
    console.log('value')
}else{
    console.log('No value')
}


console.log(typeof typeof x)


var num = 9;
if (num<5 && num>=0){
    console.log("Tiny")
} else if (num<10 && num >=5) {
    console.log("Small");
} else if (num<15 && num>=10) {
    console.log("medium")
} else if (num <20 && num>=15){
    console.log("large")
} else {
    console.log("Huge")
}



