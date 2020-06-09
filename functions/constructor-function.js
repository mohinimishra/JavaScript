// Always return an object only//

function Person(name, age){
    // console.log(this)
    name = name;
    age = age;
}
Person()    //gives Window
// console.log(Person)

var data = new Person("mohini", 24);
console.log(data)

let obj = {
    name : 'sayHi'
}
function hello(){
    console.log("hii")
} hello()

console.log(obj)
console.log(obj.constructor)   // gives the function from which this object is built.

// Class is a blueprint of object.//

// Factory method in which under function we make object//

function Gadget(name, color){
    this.name = name;
    this.color = color
}

// Instanceof tell the function name in which the particular variable assign.

let mobile = new Gadget('Iphone', 'Silver');
console.log(mobile)
console.log(mobile instanceof Gadget)
