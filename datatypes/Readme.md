# DATA-TYPES

## Numbers:
```js
        var num=20;
```
## typeof :
* typeof gives the types of the expressions weather it is number, string, boolean values etc.
```js
        var num=20;
        console.log(num);
        console.log(typeof num);
```


## Binary number
* Binary number represented by (0b).
``` js
        var binary = 0b1010;
        console.log(binary)
        console.log(typeof binary);
```


## Octal number
* Octal represented by (0).
```js
        var octal = 0234;
        console.log(octal);
```

##  Hexadecimal
* Hexadecimal represented by (0x).
```js
        var hexa = 0xab23
        console.log(hexa);
```

## Exponential
* Exponentiol represented by 1e.
```js
        var bigNumber = 100050

        var bN = 1e+5+50;

        var b = 1e5+50

        console.log(b)
        console.log(typeof b);
```

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
* When value is not assinged then it gives undefined datatype.
```js
var t;

console.log(typeof t)
```
* When null value assign.
``` js
var g = null;

console.log(g)
console.log(typeof g)
```

# Array:
##  Declaration and assignment:
``` js
var array =[]
```
```js
var joeRes = [12,40,60,20,34];
console.log(joeRes.length)
```
#  Adding a new value:
```js
        joeRes[5] = 50; 

        console.log(joeRes[5]);

output : [12, 40, 60, 20, 34, 50]
```
# Update value
```JS
joeRes[1] = 45;

console.log(joeRes);

joeRes[10] = 45;

console.log(joeRes);

console.log(joeRes[7]); // undefined
 
console.log(joeRes.length);
```
# Length Method:
```js
        var array=[1,2,3,4,'one'];

        cosole.log(array.length); // count start from 1 to n
```
# Push Method:
* push method insert element from the last.
```js
        var array=[1,2,3,4,5];
        array.push(2);
```
# Pop Method:
* pop method remove element from the last.
```js
        var array=[1,2,3,4,5];
        array.pop(2);
```
# Shift Method:
* shift method remove element from the first.
```js
        var array=[1,2,3,4,5];
        array.shift(2);
```
# Unshift Method:
* unshift method insert element from the first.
```js
        var array=[1,2,3,4,5];
        array.unshift(2);
```
# Object :
* Object stores methods and properties in key-pair manner.
```js
        var obj = {};
```
```js
        var obj ={
                "name":'XYZ',
                "age":23,
                "gender":'female'
        }

        console.log(obj);
        console.log(obj.name);
```

# Bracket-Notation :
```js
        var obj = {
        "name":"Joe",
        age:27,
        gender:"M"
        }

        var val1 = 'name';
        var val2 = 'age';

        // Bracket Notation
        console.log(obj[val1])
```

