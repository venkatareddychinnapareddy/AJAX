//Text file data

let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click',function () {
    //AJAX starts here

    // 1.We have to create the Ajax request

    let xhr = new XMLHttpRequest();

    // 2.prepare the request 

    xhr.open('GET', './data/messege.txt' , true);

    // 3.Send the request

    xhr.send();

    // 4.Process the request

    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            textData(data);
        }
    }
});


// Display textdata in card

let textData = (data) => {
    let htmlTemplate = `<h3>${data}</h3>`;
    document.querySelector('#text-card').innerHTML = htmlTemplate;

    //document.querySelector('#text-card').innerHTML = `<h3>${data}</h3>`; can write like this too
}