let body = document.body
console.log(body)

function randomColour(max,min){
    return parseInt(Math.random() * (max-min) + min)
}

// every 10 sec //

 setInterval(function(){
    body.style.backgroundColor = `rgb(${randomColour(255,0)}, ${randomColour(255,0)}, ${randomColour(255,0)})`
},1000)