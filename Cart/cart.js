// const cart = {
//     products:[],
//     totalAmount: function(){
//         let total = 0;
//         for(let i = 0; i< this.products.length; i++) {
//             total += this.products[i].price
//         }
//         return total
//     },
//     addProduct: function(item) {
//         this.products.push(item);
//     },
//     removeProduct: function(item) {
//         // write functionality to remove an item from array
//     }
// }

// console.log(cart)

// cart.addProduct({name:'Pepsodent',price:23});

// console.log(cart);

// cart.addProduct({name:'Lakme',price:30})

// console.log(cart);
// console.log(cart.totalAmount());


// function Cart () {
//     this.products = []
// }

// Cart.prototype.addProduct = function(item) {
//     this.products.push(item)
// }

// Cart.prototype.totalAmount = function() {
//     let total = 0;
//     for(let i = 0; i< this.products.length; i++) {
//         total += this.products[i].price
//     }
//     return total
// }

// let myCart = new Cart();

// console.log(myCart)

// myCart.addProduct({name:'Pepsodent',price:23});

// console.log(myCart)

// let otherCart = new Cart();

// console.log(otherCart)
// otherCart.addProduct({name:'Pepsodent',price:23});

// console.log(otherCart)


function Cart (){
    this.product = []
}
Cart.prototype.addProduct = function(item){
    this.product.push(item)    
}
Cart.prototype.totalAmount = function(){
    let total = 0;
    for(let i = 0; i<this.product.length; i++){
        total += this.product[i].price
    }
    return total
}
let myCart = new Cart()
myCart.addProduct({name:"iphone", color: "silver", price: 1000000})
myCart.addProduct({name:"iphone", color: "red", price : 34000})

console.log(myCart)
console.log(myCart.totalAmount())
    