// function makeObj(n,a,m){
//     let obj = {
//         "name" : n,
//         "age" : a,
//         "married" : m
//     }; 
//     return obj
// }makeObj();

// var newObj = makeObj('mohini', 23, "m")
// console.log(newObj)


let object = function (name, age, gender, married) {
    let dataObj = {
        "name" : name,
        "age" : age,
        "gender" : gender,
        "married" : married
    };
    return dataObj
} 
object()

console.log(object('mohini', 23, "female", "married"))
console.log(object('ashu', 23, "male", "married"))
console.log(object('chanchal', 23, "female", "UnMarried"))
