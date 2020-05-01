var char = 'a';

var hello = "Hello World";

console.log(char);
console.log(typeof char);
console.log(hello);
console.log(typeof hello);



var num = '12';

console.log(num);
console.log(typeof num);


var sent = "I Love 'JS'";

console.log(sent);

// Escape Charaters

//  \
// \t tab
// \n new line



var wanted = "I've always wanted to be a \"Scientist\""

console.log(wanted);

var para = "Hello Guys \nI'm a Developer"

console.log(para);

// String Concatenation

var firstName = "Hello";

var lastName = "World";

var fullName = firstName +' '+ lastName
console.log(fullName);






var name = "Raja";
var email = "test@test.com";
var pass = "test123";




var emailTemplate = 'Dear' +' '+ name +'\nThanks for SingUp \nYour account is created Succesfully. Please login with email-' +' '+ email +' and Password-'+' '+ pass +'\n\nThankYOu';
 console.log(emailTemplate);


//  String Literal

var str = `I've always wanted to be a "Developer" ${name}`;

console.log(str);

var temp = `Dear ${name},
Thanks for Signup
Your acoount is created successfully. Please login with email ${email} and password ${pass}

Thank you`

console.log(temp.length);


var myName = new String('Ashu');

console.log(myName);

console.log(typeof myName)

