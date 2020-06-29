let bgBody = document.body

let btn = document.querySelector('button')

function randomColor(min,max){
    return parseInt(Math.random() * (max-min) + min)
}
let color = randomColor(0,255)

btn.onclick = function(){
    bgBody.style.backgroundColor = `rgb(${randomColor(0,255)}, ${randomColor(0,255)}, ${randomColor(0,255)})`
}