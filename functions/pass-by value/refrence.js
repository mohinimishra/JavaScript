// Pass by value //
// directly create a  copy of variable and assing value in memory//

var a =10;
var b = a;
b = 20
console.log(b)


// Pass by reference//
var obj ={
    name: "mm"
}
var obj2 = obj
obj2.a = 30;
console.log(obj.a) //30

// in this only the address passes//
