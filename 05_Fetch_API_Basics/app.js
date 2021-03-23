//Text Button
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click',() => {
    fetchTextData();
});

let fetchTextData = () => {
    fetch('./data/messege.txt').then(response => {
        if (response.status !== 200){
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        response.text().then((data) => {
            let htmlTemplate = `<h3>${data}</h3>`
            document.querySelector('#text-card').innerHTML = htmlTemplate;
        });
    });
};

//JSON Button

let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click',() => {
     fetchJSONData();
});

let fetchJSONData = () => {
    fetch('./data/user.json').then(result => {
        if (response.status !== 200){
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        response.text().then((data) => {
            let htmlTemplate = `<h3>${data}</h3>`
            document.querySelector('#text-card').innerHTML = htmlTemplate;
        });
    });
};