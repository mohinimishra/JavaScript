// var amount = 760;

// var note500 =0, 
//     note100=0,note50,note20,note10,note5;

// if(amount >= 500) {
//     note500 = parseInt(amount / 500);
//     amount -= note500 * 500
// }

// if(amount >= 100) {
//     note100 = parseInt(amount / 100);
//     amount -= note100 * 100;
// }

// if(amount >= 50) {
//     note50 = parseInt(amount / 50);
//     amount -= note50 * 50;
// }


// if(amount >= 20) {
//     note20 = parseInt(amount / 20);
//     amount -= note20 * 20;
// }

// if(amount >= 10) {
//     note10 = parseInt(amount / 10);
//     amount -= note10 * 10;
// }

// console.log(note500,note100,note50,note20,note10)


var ammount =1580;
    
var note1000 =0,
    note500 =0,
    note100 = 0,
    note50 = 0,
    note20 = 0,
    note10 = 0,
    note5 = 0;

if (ammount >= 1000) {
    note1000 = parseInt(ammount / 1000);
    ammount -= note1000 * 1000;
} 
if (ammount >=500) {
    note500 = parseInt(ammount / 500);
    ammount -= note500 * 500;
}
if (ammount >= 100) {
    note100 = parseInt(ammount / 100);
    ammount -= note100 * 100;
}
if (ammount >=50) {
    note50 = parseInt(ammount /50 );
    ammount -= note50 * 50;
}
if(ammount >=20) {
    note20 = parseInt(ammount / 20);
    ammount -= note20 * 20;
}
if (ammount >=10) {
    note10 = parseInt(ammount/10);
    ammount -= note10 * 10;
}
    if (ammount>=5) {
    note5 = parseInt(ammount/5);
    ammount -= note5 * 5;
}
console.log(note1000,note500,note100,note50,note20,note10,note5)