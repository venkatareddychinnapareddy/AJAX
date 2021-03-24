import {BrainHttp} from './api/BrainHttp.js';
let serverURL = `http://127.0.0.1:3000/api`; 


//Get Button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click',() => {  
  fetchEmployees();
});

//fetchEmployees  
let fetchEmployees = () => {
  let url = `${serverURL}/employees`;
  BrainHttp.get(url).then((data) => {
    let employees = data;
    let tableRows = '';
    for(let employee of employees) {
      tableRows += `<tr> 
                        <td>${employee.id}</td>
                        <td>${employee.first_name}</td>
                        <td>${employee.last_name}</td>
                        <td>${employee.email}</td>
                        <td>${employee.gender}</td>
                        <td>${employee.ip_address}</td>
                    </tr>`;
    }
    document.querySelector('#table-body').innerHTML = tableRows;
  }).catch((err) => {
    console.log(err);
  });
};

//Post Button
let postButton = document.querySelector('#post-btn');
postButton.addEventListener('click', () => {

  let url = `${serverURL}/employees`;
    let newEmployee = {
        first_name : "Maldives",
        last_name : "Dine",
        email : "Malik@gmail.com",
        gender : "Male",
        ip_address : "127.10.20.000"
    };
  BrainHttp.post(url , newEmployee).then((data) => {
    console.log(data);
    fetchEmployees();
  }).catch((error) => {
    console.error(error);
  });
});