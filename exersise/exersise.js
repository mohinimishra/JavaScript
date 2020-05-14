//*************************************** IF-ELSE *****************************/


// AA if marks is greater than 90 .
// -AB if marks is greater than  80 and less than or equal to 90.
// - BB if marks is greater than 70 and less than or equal to 80.
// - BC if marks is greater than 60 and less than or equal to 70.
// - CC if marks is greater than 50 and less than or equal to 60.
// - CD if marks is greater than 40 and less than or equal to 50.
// - DD if marks is greater than 30 and less than or equal to 40.
// - FF if marks is less than or equal to 30.
// 

var marks =30;

if (marks>90){
    console.log("You got AA")
}
else if (marks>80 && marks<=90){
    console.log("You got AB")
}
else if (marks>70 && marks <=80) {
    console.log("You got BB")
}
else if (marks>60 && marks <=70) {
    console.log("You got BC")
}
else if (marks >50 && marks<=60) {
    console.log ("You got CC")
}
else if (marks>40 && marks <=50) {
    console.log("You got CD")
}
else if (marks >30 && marks <= 40) {
    console.log("You got DD")
}
else {
    console.log ("You got FF")
}

// object

var object= {book_name:'You dont know JS', author_name:"Kyle-Samson", status:"read"}


if (object.status=="read"){
    console.log("You read this", object.book_name , "by", object.author_name);
} else {
    console.log("You need to read", object.book_name, "by", object.author_name);
}