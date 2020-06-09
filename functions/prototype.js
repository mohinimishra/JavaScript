// function has specila property prototype.//

function Gadget(name,color){
    this.name=name;
    this.color=color;
}
console.log(Gadget.prototype)


//Prototype is a empty {}Object//

console.log(typeof Gadget.prototype) 
// object

let str = new String("mohini")
console.log(typeof str)
console.log(str.constructor)

String.prototype.myReverse = function(){
    console.log("myreverse", this)
    let str = "";
    for (var i=this.length-1; i>=0; i--){
        str += this[i]
    } return str
}
let myName = "mohini"
let result = myName.myReverse()
console.log(result)

// in-built property//
console.log(myName.length)
console.log(myName.split(""))
