let input = document.querySelector('input')
let btn = document.querySelector('button')
let displayResult = document.querySelector('.displayImgs')

function getData() {
    let value = input.value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=dlTyIb1DC5uTNgtvLwm1Mc1umwVc5PWV&q=${value}limit=25&offset=0&rating=g&lang=en`;

    fetch(url)
        .then(function (dt) {
            if (!dt.ok) throw new Error('Not found');
            return dt.json()
        })
        .then(function (parseData) {
            displayResult.innerHTML = "";
            let dataArray = parseData.data;

            dataArray.forEach(function (ele) {
                let url = ele.images.downsized_large.url;
                let img = document.createElement('img');
                img.setAttribute('src', url);
                displayResult.appendChild(img)
            });
        })
        .catch(function (err) {
            displayResult.innerHTML = "";
            let para = document.createElement('p');
            displayResult.appendChild(para)
            para.innerText = "Somethin Went wrong"
        })

}

btn.addEventListener('click', getData)