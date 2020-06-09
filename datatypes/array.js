

// Declaration and assignment

var data = [];

console.log(data);
console.log(typeof data);

// M,P,C,B,H
var joeRes = [12,40,60,20,34];
console.log(joeRes.length)

console.log(joeRes);

console.log(joeRes[1]);

// Adding a new value
joeRes[5] = 50; 

console.log(joeRes[5]);

// update value

joeRes[1] = 45;

console.log(joeRes);

joeRes[10] = 45;

console.log(joeRes);

console.log(joeRes[7]);
 
console.log(joeRes.length);


var mixed = [23,'array',false,[2,4],{}];

console.log(mixed[3][1]);   


// length
// push()
//pop()

var arr = [1];

// adds a element at last
arr.push(2);

console.log(arr)

arr.pop();

console.log(arr)