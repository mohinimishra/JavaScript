# Operators :

### Assignment Operator
* Assignment x= y
```js
        var x = 10;
```
* Addition Assignment x += y
```js
        var a = 10;
        var b = 20;
        b += a;             //(b = a + b)
```
* Substraction x -= y
```js
        var a = 10;
        var b = 20;
         b -= a;   //(b = b - a)
```
* Multiplication x *= y
```js
        var a = 10;
        var b = 20;
        b *= a;  
```

* Division x /= y
```js
        var a = 10;
        var b = 20;
        b /= a;  
```
* Remainder x %= y
```js
        var a = 10;
        var b = 20;
        b %= a;
```

# Arithmetics :
* Addition +
```js
        var a = 10;
        var b = 20;
        c = a + b;
```
* Substraction -
```js
        var a = 10;
        var b = 20;
        c = a - b;
```
* Multiplication *
```JS
        var a = 10;
        var b = 20;
        c = a * b;
```
* Division /
```js
        var a = 10;
        var b = 20;
        c = a / b;
```
 1. Remainder %
 ```js
        var a = 10;
        var b = 20;
        c = a % b;
```
 2. Increment ++
*  Post Increment :It increment the value by adding 1. but dosenot return update value.
```js 
        var m = 10;
        z = m++;
        console.log('Value of z ',z)
```
* Pre Increment : It increment the value by adding 1. and return update value.
```js
        z = ++m;
```

 3. Decrement --

 * Post decrement :It decrement the value by substracting 1. but dosenot return update value.
 ```js
        z = m--;
 ```
* pre decrement :It deccrement the value by substracting  1. and  return update value.
```js
        z = --m;
```
 4. Unary negation -x(It also precedes the operand and converts non-numbers data types to numbers like unary plus, however, it performs an additional operation, negation)
 5. Unary Plus +x (This operator precedes the 

# Comparision Operator :

* Equal to == : Compares only the value.
```js
        var a = 10;
        var b = 20;
        console.log(a==b);

    output : True
```

*  Not Equal !=
```js
        var a = 10;        var b = 20;
        console.log(a!=b);

    output: False
```
* Greater than >
```js
        var a = 10;
        var b = 20;
        console.log(a>b);

    output: False
```

*  Greter than >=
```js
        var a = 10;
        var b = 20;
        console.log(a>=b);

    output: True
```

* Less   than <
```js
        var a = 10;
        var b = 20;
        console.log(a<b);

    output: True
```
* Less than equal to <=
```js
        var a = 10;
        var b = 20;
        console.log(a<=b);

    output: True
```
* Strict Equal === : Checks value and  type both.
```js
        var str = '10';
        var num = 10;
        console.log(str===num);
    output: False
```
* Strict Not Equal !==

# Coersion : (Type-casting)

* If we added two strings then the o/p comes as string.
```js
        string + string = string
```
* If we added  string and number  then the o/p comes as string. there number converted as a string.
```js
        string + num = string
```
* If we added  strings and boolean then the o/p comes as string.
```js
        string + boolean = string
```
* If we added  number and boolean then the o/p comes as num.
```js
        num + boolean = num
```
* If we added two boolean then the o/p comes as number.
```js
        boolean + boolean = num;

        true + true = 2
        true + false = 1
        false + false = 0
```









