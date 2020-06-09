//******************** REVERSE THE NUMBER IN THE SAME ARRAY WITHOUT CREATIONG OTHER ARRAY****************************************************************//
var array = [1, 2, 3, 4, 5, 6, 7];
for (i = 0; i<=(array.length - 1) / 2; i++)
{
    var temp = array[i];
    array[i] = array[array.length-1-i];
    array[array.length-1-i] = temp;
  
}
console.log(array)
/******************************************************************************/

// *************** FIND ODD NO IN THE ARRAY AND STORE IN THE ARRAY ******//
var array = [1, 2, 3, 4, 5, 6, 7];
var array1 = [];
for (i=0; i<array.length; i++) 
{
    if(array[i] % 2 != 0) {
    array1.push(array[i])
    }
}console.log(array1)
// ***********************************************************************//

// ***************MULTIPLY WITH 3 IN RH GIVEN ARRAY AND CREATE A NEW ARRAY*************************************** */
var array = [1, 2, 3, 4, 5, 6, 7];
var array1 = [];
for (i=0; i<array.length; i++) {
    array1[i]= 3*array[i];
}
console.log(array1)
// ***********************************************************//

// ************************Reverse array *****************//
var array = [1, 2, 3, 4, 5, 6, 7];
var array2 = []
for(i=array.length-1; i>=0; i--) {
    array2.push(array[i])
} console.log(array2)
// *******************************************************//

var a = 0;
var b = 1;
var fab ;
console.log(a)
console.log(b)
for (i=0; i<=5; i++) {
    fab =  a + b;
    a = b;
    b = fab;
    console.log(fab)
} 
// ************************************************************//

// *************** WAP to define a method to reverse the array ***************//
var array = [1, 2, 3, 4, 5, 6, 7];
var arrayNew = [];
for (i = array.length-1; i>=0; i--) {
    arrayNew.push(array[i])
} console.log(arrayNew)
// ***********************************************************************//

// *******  Define a method to add the array elements ***********************//
var array = [1, 2, 3, 4, 5, 6, 7];
var arrayNew1 = [3, 4,  8, 9, 6, 8, 9];
var arrayNew2 = [];
for(i=0; i<array.length-1; i++)
{
    arrayNew2[i] = array[i] + arrayNew1[i]
}console.log(arrayNew2)
// ******************************************************************//

// ***WAP to calculate the sum of even number or odd number in a array*********/
var array = [1, 2, 3, 4, 5, 6, 7];
var temp = 0;
var temp1 = 0;

for (i=0; i<=array.length-1; i++)
{
    if (array[i] % 2 != 0) {
       
        temp1 =  temp1 + array[i]  
    }
    if( array[i] % 2 == 0) {
    
        temp = temp + array[i]
    }
}
console.log("sum of odd no.",temp)
console.log("sum of even no:",temp1)
// ***************************************************************************//

//**** WAP to find first biggest and second biggest element from the element.** */
var greatestArray = [8, 6, 19,  7, 5, 18 ];
var greatest ;
for (i = 0; i < greatestArray.length; i++){
    for (j = i+1; j< greatestArray.length; j++){
        if ( greatestArray[i] > greatestArray[j]) {
             greatest = greatestArray[i];
             greatestArray[i] = greatestArray[j]
             greatestArray[j] = greatest

        }
    }
} console.log(greatestArray)
console.log("Biggest no:",greatestArray[greatestArray.length-1])
console.log("Second Biggest no:",greatestArray[greatestArray.length-2])
// **************************************************************************//
//  WAP to define a method to return number of odd numbers and number of even numbers in an array ********************************************//
var array = [1, 2, 3, 4, 5, 6, 7];
var odd = [];
var even = [];
for (i = 0; i< array.length; i++) {
    if (array[i] % 2 == 0) {
        even.push(array[i])
    }
    else if (array % 2 != 0) {
        odd.push(array[i])
    }
}
console.log("no of even number is:", even.length)
console.log("no of odd no is:", odd.length)
// ***********************************************************************//
//*******************************Define a method to add the element into existing array in a specified index**************************//.

var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo =[6, 7, 8, 9, 10];
var arrayThree = [];
for (i=0; i<arrayOne.length; i++) {
   
        arrayThree.push(arrayOne[i])
        arrayThree.push(arrayTwo[i])
    
} console.log(arrayThree)
// ******************************************************************//

// WAP to count number of times each elements occuring in an array, array having element b/w (0-100) without comparing//
var mulArray = [3,5,1,3,5,1,4,1];
var object = {};
for (i=0; i <mulArray.length; i++) {
    if (object[mulArray[i]]) {
        object[mulArray[i]] += 1
    } else {
        object[mulArray[i]] = 1
    }
}console.log(object)