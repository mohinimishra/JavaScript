function add(a, b) {
    return new Promise(function (resolve, reject) {
        if (typeof a !== "number" || typeof b !== "number") {
            reject("please pass a number")
        }
        else {
            let sum = a + b
            resolve(sum)
        }
    })
}

function square(n) {
    return new Promise(function (resolve, reject) {
        if (typeof n !== "number") {
            reject('Pass no for square')
        }
        else {
            resolve(n * n)
        }
    })
}



add(3, 3)
    .then(function (dt) {
        console.log(dt)
        return square(dt)
    })
    .then(function (sqdt) {
        console.log(sqdt)
    })
    .catch(function (err) {
        console.log(err)
    })
