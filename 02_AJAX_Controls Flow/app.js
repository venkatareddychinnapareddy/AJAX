//Text data

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

// JSON Data
 
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click',function(){

    let xhr = new XMLHttpRequest();
    xhr.open('GET', './data/user.json' , true);
    xhr.send();
    xhr.onload = () => {
        if (xhr.status === 200) {
            let data = xhr.responseText;
            jsonData(JSON.parse(data));
        }
    }
})

// Display JSONData in card

let jsonData = (data) => {
    let htmlTemplate = `<ul class="list-group">
                            <li class="list-group-item">Employee Name :${data.Name}</li>
                            <li class="list-group-item">Employee Id :${data.Id}</li>
                            <li class="list-group-item">Designation :${data.Designation}</li>
                            <li class="list-group-item">Branch :${data.Branch}</li>
                            <li class="list-group-item">Status :${data.Status}</li>
                        </ul>`;
    document.querySelector('#json-card').innerHTML = htmlTemplate;

    //document.querySelector('#text-card').innerHTML = `<h3>${data}</h3>`; can write like this too
}

//API Data

let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click' ,function (){

     let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/users' , true);
        xhr.send();
        xhr.onload = () => {
            if (xhr.status === 200) {
                let data = xhr.responseText;
                apiData(JSON.parse(data));
            }
        };
});

// Display API data on card 

let apiData = (data) => {
    let htmlTemplate = '';
    for(let users of data){
        htmlTemplate += `<ul class="list-group mt-4">
                            <li class="list-group-item">ID : ${users.id}</li>
                            <li class="list-group-item">Name : ${users.name}</li>
                            <li class="list-group-item">Username : ${users.username}</li>
                            <li class="list-group-item">Email : ${users.email}</li>
                            <li class="list-group-item">Street : ${users.address.street}</li>
                            <li class="list-group-item">City : ${users.address.city}</li>
                            <li class="list-group-item">PIN : ${users.address.zipcode}</li>
                        </ul>`;
    }
    document.querySelector('#api-card').innerHTML = htmlTemplate;
}
