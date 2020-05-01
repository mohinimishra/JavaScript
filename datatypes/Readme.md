# DATA-TYPES

## Numbers:
```js
        var num=20;
```
## typeof :
```js
        var num=20;
        console.log(num);
        console.log(typeof num);
```
* typeof gives the types of the expressions weather it is number, string, boolean values etc.

## Binary number
``` js
        var binary = 0b1010;
        console.log(binary)
        console.log(typeof binary);
```
* Binary number represented by (0b).

## Octal number
```js
        var octal = 0234;
        console.log(octal);
```
* Octal represented by (0).
##  Hexadecimal
```js
        var hexa = 0xab23
        console.log(hexa);
```
* Hexadecimal represented by (0x).
## Exponential
```js
        var bigNumber = 100050

        var bN = 1e+5+50;

        var b = 1e5+50

        console.log(b)
        console.log(typeof b);
```
* Exponentiol represented by 1e.
## NaN; (Not a number)
```js
        var divide = 10/'a';

        console.log(divide);

        console.log(typeof divide);
```

# Strings:
* Strings defined as ' '.
```js
        var name = 'mohini';
```
## Escape Charecters :
* \ - to use commas within the sentences.
* \n - for new line
* \t - for tab
```js
        var wanted = "I've always wanted to be a   \"Scientist\""
        console.log(wanted);
```
## String Concatenation
```js
        var firstName = "Hello";

        var lastName = "World";

        var fullName = firstName +' '+ lastName
        console.log(fullName);
```
* example :
```js
var name = 'Mohini';
var email = 'mohini@gmail.com'
var pass ='*******'

var template = "Dear"+ name + '\nThankYou for SingUp. Your account is suucessfully created. Please login with your email-'+ email +' and Passward-' + pass + '\nThANKyou';

console.log(template);
```

# String Literal :
```js
        var str = `I've always wanted to be a "Developer" `;

        console.log(str);
```
```js
        var name = 'Mohini';
        var email = 'mohini@gmail.com'
        var pass ='*******'

        var temp = `Dear ${name}
        ThankYou for SingUp. Your account is suucessfully created. Please login with your email- ${email} and Passward- ${pass} 
        
        ThANKyou`;

        console.log(temp)

```
# Boolean :
* It gives two values True and False.
```js
var areYouOld = false;

var married = true;

console.log(married);
```
# Undefinde & Null :
```js
var t;

console.log(typeof t)
```
* When value is not assinged then it gives undefined datatype.
``` js
var g = null;

console.log(g)
console.log(typeof g)
```
* When null value assign.


