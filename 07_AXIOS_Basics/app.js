//Text data button
let textButton = document.querySelector('#text-btn');
textButton.addEventListener('click', () => {
    fetchTextData();
});

let fetchTextData = () => {
    axios.get('./data/messege.txt').then((response) => {
        if (response.status !== 200) {
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        let fileContent = response.data;
        document.querySelector('#text-card').innerHTML = `<h3>${fileContent}</h3>`;
    }).catch((err) => {
        console.error(err);
    });
};

//JSON data button
let jsonButton = document.querySelector('#json-btn');
jsonButton.addEventListener('click', () => {
    fetchJsonData();
});

let fetchJsonData = () => {
    axios.get('./data/user.json').then((response) => {
        if (response.status !== 200) {
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        let fileContent = response.data;
        document.querySelector('#json-card').innerHTML = `<ul class="list-group">
                                                                <li class="list-group-item">Employee Name :${fileContent.Name}</li>
                                                                <li class="list-group-item">Employee Id :${fileContent.Id}</li>
                                                                <li class="list-group-item">Designation :${fileContent.Designation}</li>
                                                                <li class="list-group-item">Branch :${fileContent.Branch}</li>
                                                                <li class="list-group-item">Status :${fileContent.Status}</li>
                                                           </ul>`;
    }).catch((err) => {
        console.error(err);
    });
};

//API data button
let apiButton = document.querySelector('#api-btn');
apiButton.addEventListener('click', () => {
    fetchApiData();
});

let fetchApiData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        if (response.status !== 200) {
            console.log(`Something Went Wrong : ${response.status}`);
            return;
        }
        let users = response.data;
        let userList = '';
        for(let user of users) {
            userList += `<ul class="list-group mt-4">
                                <li class="list-group-item">ID : ${user.id}</li>
                                <li class="list-group-item">Name : ${user.name}</li>
                                <li class="list-group-item">Username : ${user.username}</li>
                                <li class="list-group-item">Email : ${user.email}</li>
                                <li class="list-group-item">Street : ${user.address.street}</li>
                                <li class="list-group-item">City : ${user.address.city}</li>
                                <li class="list-group-item">PIN : ${user.address.zipcode}</li>
                         </ul>`;
        }
        document.querySelector('#api-card').innerHTML = userList;
    }).catch((err) => {
        console.error(err);
    });
};