# Variables :
* Variables are placeholders.
* Variables in JS are case sensitive.


## Variable declaration:
```js
         var x;
```
* where var is keyword and x is variableName.

## Assignment:
``` js
         x ='Hello world';
         console.log(x);
```

## Declare and Assign :
``` js 
        var name = 'javaScript';
        console.log(name);
```
## Un-defined & Not-defined :
* If I try to console a variable which is not declare then the output comes not-defined.
```js
        console.log(y);
        output: not-defined
```
* If variable is not assigned with any value the the results come un-defined.
```js
        var x;
        console.log('value of x is' x);
        output: un-defined
```
## Variable Naming:
* Variable name cannot be a reserved keyword.
* It cannot start with a number.
* Only two special character are allowed (_, $).
``` js
        var full_name = 20;
        var $abc = 30;
        var ab$ = 40;
```
## Underscore camel-casing
``` js
        var fullName = "Ashutosh Mishra"

        var hdfcAccountNumber = 123;
```
