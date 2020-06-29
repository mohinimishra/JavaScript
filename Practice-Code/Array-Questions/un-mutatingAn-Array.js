// Un-Mutating an Array
// x =[3,3,3,3,3,3,3]
// change(x, 0) =[3,2,2,2,2,2,3]
// change(x,1) =[3,2,2,2,2,2,3]
// change(x,2) =[3,2,1,1,1,2,3]
// change(x, 0) =[3,2,1,0,1,2,3]

function change(x,times){
    for(let i =0; i < x.length; i++){
        for(let j =1; j<= times; j++){
            if(i>=j && i<x.length-j){
                x[i]--
            }    
        }
    }return x
}

    console.log(change([3,3,3,3,3,3,3], 0))
    console.log(change([3,3,3,3,3,3,3], 1))
    console.log(change([3,3,3,3,3,3,3], 2))
    console.log(change([3,3,3,3,3,3,3], 3))


