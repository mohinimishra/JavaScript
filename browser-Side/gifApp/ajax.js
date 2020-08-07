let input = document.querySelector('input')
let btn = document.querySelector('button')
let displayResult = document.querySelector('.displayImgs')

function makeAjaxCall() {

    let value = input.value
    displayResult.innerHTML = "";

    $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?api_key=dlTyIb1DC5uTNgtvLwm1Mc1umwVc5PWV&q=${value}limit=25&offset=0&rating=g&lang=en`,

        success: function (response) {
            let dataArray = response.data

            dataArray.forEach(function (e) {
                let url = e.images.downsized_large.url;
                let img = document.createElement('img');
                img.setAttribute('src', url);
                displayResult.appendChild(img);
            })
        },
        error: function (error) {
            let para = document.createElement('p');
            para.innerText = "Error";
        }




    })


}
btn.addEventListener('click', makeAjaxCall)