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

// var marks =30;

// if (marks>90){
//     console.log("You got AA")
// }
// else if (marks>80 && marks<=90){
//     console.log("You got AB")
// }
// else if (marks>70 && marks <=80) {
//     console.log("You got BB")
// }
// else if (marks>60 && marks <=70) {
//     console.log("You got BC")
// }
// else if (marks >50 && marks<=60) {
//     console.log ("You got CC")
// }
// else if (marks>40 && marks <=50) {
//     console.log("You got CD")
// }
// else if (marks >30 && marks <= 40) {
//     console.log("You got DD")
// }
// else {
//     console.log ("You got FF")
// }

// // object

// var object= {book_name:'You dont know JS', author_name:"Kyle-Samson", status:"read"}


// if (object.status=="read"){
//     console.log("You read this", object.book_name , "by", object.author_name);
// } else {
//     console.log("You need to read", object.book_name, "by", object.author_name);
// }

//***************************Find Maximum between to number****************/

// var a = 10;
// var b =20;
//  if (a >b){
// //      console.log("Maximum no is:", a)
// //  } else {
// //      console.log("Maximum no is :", b)
// //  }

// // Ternary Operator
// a>b ? console.log(a): console.log(b)


//***************************Find Maximum between three number****************/

// var num1 =120;
// var num2 = 474;
// var num3 = 100;

// if (num1>num2 && num1>num3) {
//     console.log("Maximum no is:", num1)
// } else if  (num2>num1 && num2>num3) {
//     console.log("Maximum no is:", num2) 
// } else {
//     console.log("Maximum no is:", num3)
// }

// **************** check whether a number is positive, negative or zero ******/

// var num = 0;

// if (num==0){
//     console.log("Given no is Zero")
// } else if (num<0) {
//     console.log ("Given no is Negative")
// } else {
//     console.log("given no is Positive")
// }

//*************to check whether a number is divisible by 5 and 11 or not ******/

// var number = 5;
// if (number%5==0 && number%11==0) {
//     console.log("This", number,  "is divisible by 5 and 11")
// } else {
//     console.log("This", number, "is no divisible by 5 and 11")  
// }

// ********************* To check weather a number is odd or even**************/

// var num =10;
//  if (num%2==0){
//      console.log("No is even")
//  } 
//  } else {
//      console.log("no is odd")
//  }

// ***************** To check weather year is leap year or not **************

// var year =2008;
// if ((year % 4 == 0 && year %100 != 0) || year % 400 == 0) {
//     console.log("Year", year , "is a Leap Year")
// } else {
//     console.log ("Year", year, "is not a Leap Year.")
// }

// *********** To check wether a charecter is alphabet or not  ************/

// var chr = 'c';
// if ((chr>= 'a' && chr <="z") || (chr>="A" && chr <="B")){
//      console.log("The given", chr , "is alphabet.")
// } else {
//     console.log("The given", chr , "is not alphabet")
//}

// ************************ check vowel or consonant ******************//

// var chr = 'j'
// if (chr == 'a' || chr =='e'|| chr=='i' || chr=='o' || chr=='u'|| chr== 'A' || chr=='I' || chr =='I' || chr=='O' || chr=='U'){
//     console.log("Given charecter", chr, "is Vowel.")
// } else {
//     console.log("Given Charecter", chr, "is consonant.")
// }

// /******* */ Logic to check alphabet, digit or special character ***************/

// var chr = 2;

// if ((chr >='a' && chr<='z')||( chr>='A' && chr<='Z')){
//     console.log("Its alphabet")
// } else if (chr >= 0 && chr<=9) {
//     console.log("Its digit.")
// } else {
//     console.log ("ItsSpecial charecter.")
// }

//*************** To check wether charecter is uppercase or lowercase *********/

// var chr ="A"
// if (chr>='a' && chr<='b'){
//     console.log("Charecter is lowercase.")
// } else if (chr >='A' && chr<='Z'){
//     console.log("Charecter is uppercase.")
// }

// ****************** program to enter week number and print day of week ******/

// var week = 9;
// if (week==1) {
//     console.log("Monday")
// } else if(week==2) {
//     console.log("Tuseday")
// } else if(week==3) {
//     console.log("Wedensday")
// } else if (week==4){
//     console.log("Thursday")
// } else if (week==5){
//     console.log("Friday")
// } else if (week==6){
//     console.log("Staurday")
// } else if(week==7){
//     console.log("Sunday")
// } else {
//     console.log("Not A Day")
// }

// switch(week) {
//     case 1:
//         console.log('Monday');
//     break;
//     default : 
//         console.log('Not a week day');
// }

// ********************** input month number and print no of days in month ***/

// var month = 2; {
//     if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
//         console.log("Days in month: 31")
//     } else if(month==4 || month==6|| month==9 || month==11){
//         console.log("Days in this month: 30")
//     } else if(month==2){
//         console.log("Days in this month: 28")
//     } else {
//         console.log("Not a month")
//     }
// }

// to check whether triangle is valid or not if angles are given

// var angle1 = 10;
// var angle2 =80;
// var angle3 =90;
// var sum = angle1 + angle2 + angle3;

// if (sum == 180 && angle1>0 && angle2>0 && angle3>0) {
//     console.log("Its a triangle")
// }
// else {
//     console.log("Not a Triangle.")
// }

// ******************check whether triangle is valid or not if sides are given ******************************************************** //

// var firstSide = 10;
// var secondSide =7;
// var thirdSide =4;

// if ((firstSide < (secondSide + thirdSide)) && (secondSide <(firstSide + thirdSide)) && (thirdSide < (firstSide +secondSide))) {
//     console.log("Triangle")
// }
// else {
//     console.log("Not a Triangle.")
// }

//******************************************/ check whether triangle is equilateral, scalene or isosceles***************************************************************

// var side1 = 3;
// var side2 = 3;
// var side3 = 3;

// if (side1==side2 && side2==side3){
//     console.log("equilateral")
// } else if((side1==side2 && side1 != side3) || (side2==side3 && side1 != side2) || (side1==side3 && side1 != side2)){
//     console.log("scalene")
// } else if(side1 != side2 && side2 != side3){
//     console.log("isoscales")
// } else {
//     console.log("nothing")
// }

// var costPrice =100;
// var sellingPrice =50; 

// if (costPrice<sellingPrice) {
//     profit = sellingPrice-costPrice;
//     console.log("Profit of :", profit)
// } else {
//     loss = costPrice - sellingPrice;
//     console.log("loss of :", loss)
// }


// var array = [1,2,3,4,5]
// console.log(push.array)

// var array = [1, 2, 5, 8, 10];

// for (i =(array.length-1); i>=0; i--) {
//     console.log(array[i]);
// }

// var array = [2, 4, 6, 8, 10];
// var array2 = [];
// for (i=(array.length - 1); i>=0; i--)
//  {
//      array2.push( 2* array[i]);
    
// }
// console.log(array2)


// var array = [1, 2, 3, 4, 5];
// for(i=0; i<((array.length-1)/2); i++) {
//     var temp = array[i]
//     array[i]  = array[array.length - 1 - i] ; 
//     array[array.length -i-1] = temp;K
   
// }

    
// console.log(array
//     )

// var array = [3, 8, 9, 10, 14, 5]
// var array1 = [];
// for (i = 0; i<array.length; i++) {
//     if (array[i] % 2 != 0 ) {
//         array1.push(array[i])
//     }
// }
// console.log(array1)

// console.log(array.reverse())

// var a = 0 ;
// var b = 1 ;
// var f ;
// console.log(a)
// console.log(b)
// for (i=0; i<=5; i++) {
   
//     f = a + b;
//     a = b;
//     b = f;
//     console.log(f)
// }

// var n = 5;
// var result = 0;
// for (var i=1; i<=5; i++) {
//     result = i + result
// } console.log(result)

// var num = 10;
// var obj = {}

// obj.num = 10

// console.log(obj)

// var binary = 0b1001;
// console.log(binary)
// console.log(typeof binary)

// var octal = 0234;
// console.log(octal)
// console.log(typeof octal)

// var hexa = 0xab23;
// console.log(hexa)
// console.log(typeof hexa)

// var num = 100050;
// var ex = 1e+5+50;
// var expo = 1e5+50;
// console.log(expo)
// console.log(typeof expo)

// var divide = 10 / 'a';
// console.log(divide);
// console.log(typeof divide)

// var numObj = new Number(10);
// console.log(numObj)
// console.log(typeof numObj)
// var name = 'mohini';
// var email = 'abc@gmail.com';
// var pass = 1234;

// var temp = `Dear ${name},
// Thanks for Signup
// Your acoount is created successfully. Please login with email ${email} and password ${pass}

// Thank you`
// console.log(temp)
// console.log(temp.length);
// console.log(typeof temp)

// var myName = new String('Ashu');

// console.log(myName);

// console.log(typeof myName)
// var areYouOld = false;

// var married = true;

// console.log(married);
//     console.log(typeof married)

// var g = null;
// console.log(g)
// console.log(typeof g)

// var array = [5,1,2,3,4]
// array[1] = 20
// console.log(array)
// console.log(array[9])

// var mixed = [34, 'mohini', false, [3,5], {1 :'mohini'}]
// console.log(mixed[48].length)

// var array = [4,6,8,2]
// array.push(5)
// console.log(array)
// console.log(array.length)
// console.log(array[4])
// array.pop(6)
// console.log(array)
// console.log(array.length)
// array.unshift(9)
// console.log(array)

// var joeRes = {
//     "math":20,
//     "physics":30,6-
//     "chemistry":40,
//     "bio":45,
//     "hindi":65
// }
// var val1 = "math";

// console.log(joeRes.math)
// console.log(joeRes[val1])

// joeRes.math = 30;
// console.log(joeRes.math)
// console.log(joeRes)
// joeRes.computer =60;
// console.log(joeRes)

// var m= 10;
// z = m++;
// console.log(z) 
// z = m++;
// console.log(z)

// // var hello ;

// // console.log(!hello);

// var a = true;
// var b = false ;
// c = b -  a;
// console.log(typeof c)