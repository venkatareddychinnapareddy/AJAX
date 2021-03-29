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
  axios.get(url).then((response) => {
    let employees = response.data;
    let tableRows = ``;
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
    console.error(err);
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
  axios.post(url , newEmployee).then((response) => {
    console.log(response.data);
    fetchEmployees();
  }).catch((err) => {
    console.error(err);
  });
});

//PUT Button
let putButton = document.querySelector('#put-btn');
putButton.addEventListener('click', () => {

  let employeeID = 'VLITS38979';
  let url = `${serverURL}/employees/${employeeID}`;
  let updateEmployee = {
        first_name : "Sharmi",
        last_name : "Pilli",
        email : "Pilli@gmail.com",
        gender : "Female",
        ip_address : "127.10.10.20"
  };
  axios.put(url , updateEmployee).then((response) => {
    console.log(response.data);
    fetchEmployees();
  }).catch((err) => {
    console.error(err);
  });
});

//Delete button
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click', () => {

  let employeeID = 'VLITS22363';
  let url = `${serverURL}/employees/${employeeID}`;
  axios.delete(url).then((response) => {
    console.log(response.data);
    fetchEmployees();
  }).catch((err) => {
    console.error(err);
  });
});