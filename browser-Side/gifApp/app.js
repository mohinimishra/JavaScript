let input = document.querySelector('input')
let btn = document.querySelector('button')
let displayResult = document.querySelector('.displayImgs')

function makeAjaxCall() {
    let value = input.value

    let xhr = new XMLHttpRequest()

    function handleResponse() {
        displayResult.innerHTML = "";

        if (xhr.readyState < 4) {
            return
        }

        if (xhr.status !== 200) {
            return
        }

        let respData = JSON.parse(xhr.responseText);
        let dataArray = respData.data;

        dataArray.forEach(function (ele, ind, arr) {
            let url = ele.images.downsized_large.url;
            let img = document.createElement('img')
            img.setAttribute('src', url)
            displayResult.appendChild(img)
        });

    }

    xhr.onreadystatechange = handleResponse;
    xhr.open('GET', `https://api.giphy.com/v1/gifs/search?api_key=dlTyIb1DC5uTNgtvLwm1Mc1umwVc5PWV&q=${value}limit=25&offset=0&rating=g&lang=en`, true)
    xhr.send('')

}


btn.addEventListener('click', makeAjaxCall)










