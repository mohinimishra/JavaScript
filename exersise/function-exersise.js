

/******************************* NAME PRINT *********************/

// function print() {
//     console.log("mohini")
// } 
// print()

// *************************** ADDITION *******************************//

// function add(a,b) {
//     var result ;
//     result = a + b;
//     console.log(result)
// } add (3, 4)

//******************* ADDITION OF N NUMBERS ****************************//

// function add() {
//     var result =0;
//    for (var i = 0; i < arguments.length; i++) {
//        result = result + arguments[i];
//    } return result
// }
// var addition = add (3,5,1)
// console.log(addition)

// ********************* ADDITION OF N NUMBERS *********************//

// function add (a, b, c, d) {
//     var result;
//     if(a && b && c && d){
//     result = a + b + c +d;
//     } else if(a && b && c){
//     result = a + b + c ;
//     } else if(a && b)
//     result = a + b ;
//     console.log(result)
// } add (2, 2, 2,4)

// ********************* REVERSE ARRAY *********************//

// function reverse([a,b,c,d,e]) {
//     var array  = [a,b,c,d,e]
//     var temp;
//     for (i=0; i<(array.length-1)/2; i++){
//         temp = array[i];
//         array[i] = array[array.length-1-i];
//         array[array.length-1-i] = temp
//     }
//     console.log(array)
// } reverse([2,3,5,6,8]) 

// ********************* REVERSE ARRAY OF N NUMBERS *********************//

// function reverse (arr) {
    
//     var temp;
//     for (var i=0; i < (arr.length-1)/2; i++) {
//         temp = arr[i];
//         arr[i] = arr[arr.length-1-i];
//         arr[arr.length-1-i] = temp;
//     } return arr

// }
// var arr = reverse([3,4,5,6,7,8,9])
// console.log(arr)

// ********************* FIND ODD NUM AND STORE IN ARRAY *********************//

// function odd (a) {
    
//     var array1=[];
//     for (i=0; i<a.length; i++) {
//         if (a[i] % 2 != 0) {
//             array1.push(a[i]);
//         }
//     } 
//     return array1
//  } 
//  var arr = odd([4,5,6,7,8,1,9])
//  console.log(arr)

// var [a,b,c,d] = 10;


// function foo(a,b,[a,b],d){

// }

// foo(10,20,30,[1,2,3])





// ********************* FIND ODD NUM AND STORE IN ARRAY N NUMBERS ****************************************************************//

// function odd (array) {
   
//     var array1 = [];
//     for(i=0; i<array.length; i++) {
//         if (array[i] % 2 != 0) {
//             array1.push(array[i])
//         }
//     }return array1
// }
// var array = odd ([2,4,6,7,8,9,2,3])
// console.log(array)

// ******* MULTIPLY WITH 3 IN GIVEN ARRAY AND CREATE A NEW ARRAY *****//

//  function mul (a,b,c,d,e,f) {
//      var array = [a, b, c, d, e,f];
//      var array1 =[];
//      for (i=0; i< array.length; i++) {
//          array1[i] = array[i] * 3;
//      } console.log(array1)
//  } mul (1,2,3,4,5,6)

// ******* MULTIPLY WITH 3 IN GIVEN ARRAY AND CREATE A NEW ARRAY n numbers*****//

// function mul (arr) {   
//     var array1 =[];
//     for (i=0; i< arr.length; i++) {
//         array1[i] = arr[i] * 3 
//     } return array1
// }
// var arr = mul ([1,2,3,4,5,6,7])
// console.log(arr)

// ************************* REVERSE ARRAYN NO ***************************//

// function reverse(arr) {
// var arrayNew = [];
//     for (var i = arr.length - 1; i >= 0; i--) {
//         arrayNew.push(arr[i])
//     } return arrayNew
// }
// var array = reverse([3, 4, 5, 6, 7, 8])
// console.log(array)

// function add(a,b) {
//     var c;
//     c= a + b;
//     return c
// } 
// var addition = add(3,5)
// console.l(addition)                                                                                          

// function foo(){
//     a =10
// } 
// foo()
// console.log(a)

// var a = 10;
// function foo() {
//     console.log(a);
//     var a = 20;
//     console.log(a)
// }
// foo()

// console.log(a)
// let a = 20
// console.log(a)
// foo()
// var res = sum(1,2)
// console.log(res)
// var sum = function (a,b){
//     return a+b;
// }
// function foo(){
//     console.log('I am foo')
// }
// console.log(sum(1,2))
// const obj = {
//     "name" : "mohini",
//     "age" : 24
// }
// obj.name = "mm"
// console.log(obj)

// let x =20;
// let y = 30;
// function foo(){
//     console.log(x);
//     console.log(y);
//     let y = 40;
//     console.log(y)
// }
// foo()

// var tetx = 'outside';
// function logIt() {
//     console.log(tetx);
//     var tetx = 'inside';
// }
// logIt()

// function foo() {
//     console.log(a)
//     let a = b= 0;
//     a++
    
//     console.log(b)
//     console.log(typeof b)
   
//     console.log(typeof a)
//     return a
// }
// foo()

// function foo() {
//     var a = b = 3;
// }
// foo()
// console.log(typeof a)
// console.log(typeof b)

// var array = [3,10,5,8,4];
// var greatest;
// for (i=0; i<array.length; i++) {
//     greatest = array[i];
//     for(j=i+1; j<array.length; j++) {
//         if(array[i]>array[j]){
//             greatest = array[i]
//         }
//     }
// } console.log(greatest)

// var a = 23
//  console.log(a)
// console.log(typeof a)
// console.log(a.length)

// var str ='10';
// var num = 10;
// console.log(num===num)
// let a= 30;
// // let b =20;
// function foo() {
//     // console.log (b);
//     console.log(a)
//     // let a = 30;
//     var a = 20;
//     console.log (a)
// }
// foo()

// function array(arr1) {
//     for (var i =0; i< arr1[i]; i++){
//         var greatest = arr1[i];
//         for (var j=i+1; j<arr1.length; j++) {
//             if (greatest > arr1[j]);
//             greatest = arr1[j]
//         }
//     }return greatest
    
// }
// var arr = array([3,2,17,3,5]);
// console.log(arr)


// function reverse(arr) {
// var arrayNew = [];
//     for (var i = arr.length - 1; i >= 0; i--) {
//         arrayNew.push(arr[i])
//     } return arrayNew
// }
// var array = reverse([3, 4, 5, 6, 7, 8])
// console.log(array)

// var array = [2,9,4,5,2];
// var largest =array[0];
// for(i=0; i<=array.length-1; i++) {
//     if (array[i]> largest) {
//         largest = array[i]
//     }
// } console.log(largest)


   







































