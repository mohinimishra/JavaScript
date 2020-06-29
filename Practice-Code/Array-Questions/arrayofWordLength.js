function wordLength(array){
    let result =[];
    for(let i = 0; i<array.length; i++){
        result.push(array[i].length)
    } return result
}
console.log(wordLength(["Hello", "mohini" , 4]))