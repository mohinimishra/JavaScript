// this keyword point to the current object //

var a = 10;
console.log(this)
console.log(this.a)

function foo(){
    console.log("hello")
}
this.foo()

// function call=> window 
// method call => current object