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
    fetch('./data/user.json').then((response) => {
        if (response.status !== 200){
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        response.json().then((data) => {
            let Employee = data;
            let htmlTemplate = `<ul class="list-group mt-1">
                                    <li class="list-group-item">Name : ${Employee.Name}</li>
                                    <li class="list-group-item">Id : ${Employee.Id}</li>
                                    <li class="list-group-item">Designation : ${Employee.Designation}</li>
                                    <li class="list-group-item">Branch : ${Employee.Branch}</li>
                                    <li class="list-group-item">Status : ${Employee.Status}</li>
                                </ul>`;
             document.querySelector("#json-card").innerHTML = htmlTemplate;
        });
    });
};

//API Button 

let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click',() => {
    fetchAPIData();
});

let fetchAPIData = () => {
    fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
        if (response.status !== 200){
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        response.json().then((data) => {
            let users = data;
            let apiTemplate = ``;
            for(let user of users){
                apiTemplate +=  `<ul class="list-group mt-4">
                                    <li class="list-group-item">ID : ${user.id}</li>
                                    <li class="list-group-item">Name : ${user.name}</li>
                                    <li class="list-group-item">Username : ${user.username}</li>
                                    <li class="list-group-item">Email : ${user.email}</li>
                                    <li class="list-group-item">Street : ${user.address.street}</li>
                                    <li class="list-group-item">City : ${user.address.city}</li>
                                    <li class="list-group-item">PIN : ${user.address.zipcode}</li>
                                </ul>`;
            }
            document.querySelector('#api-card').innerHTML = apiTemplate;
        });
    });
};