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
postButton.addEventListener('click', function () {

  let url = `${serverURL}/employees`;
    let newEmployee = {
        first_name : "Kevin",
        last_name : "william",
        email : "Kevin@gmail.com",
        gender : "Male",
        ip_address : "127.10.10.80"
    };
  BrainHttp.post(url , newEmployee).then((data) => {
    console.log(data);
    fetchEmployees();
  }).catch((err) => {
    console.error(err);
  });
});

//PUT Button
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', () => {

  let employeeID = 'VLITS31781';
  let url = `${serverURL}/employees/${employeeID}`;
  let updateEmployee = {
        first_name : "Anjali",
        last_name : "lara",
        email : "Anu@gmail.com",
        gender : "Female",
        ip_address : "127.10.10.100"
  };
  BrainHttp.put(url , updateEmployee).then((data) => {
    console.log(data);
    fetchEmployees();
  }).catch((err) => {
    console.error(err);
  });
});

//Delete button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', () => {

  let employeeID = 'VLITS28216';
  let url = `${serverURL}/employees/${employeeID}`;
  BrainHttp.delete(url).then((data) => {
    console.log(data);
    fetchEmployees();
  }).catch((err) => {
    console.error(err);
  });
});