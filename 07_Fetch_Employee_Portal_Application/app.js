import {BrainHttp} from './api/BrainHttp.js';
let serverURL = `http://127.0.0.1:3000/api`;

//DOM content loaded. It fetches the data that written in server

window.addEventListener('DOMContentLoaded' , () => {
 fetchEmployees();
});

let fetchEmployees = () => {
    let url = `${serverURL}/employees`;
    BrainHttp.get(url).then((data) => {
        let employees = data;
        let employeeRows = ``;
        for(let employee of employees){
            employeeRows += `<tr>
                                    <td>${employee.id}</td>
                                    <td>${employee.first_name}</td>
                                    <td>${employee.last_name}</td>
                                    <td>${employee.email}</td>
                                    <td>${employee.gender}</td>
                                    <td>${employee.ip_address}</td>
                                     <td>
                                        <button class="btn btn-secondary mt-0 btn-sm update form-inline-group">Update</button>
                                        <button class="btn btn-danger mt-0 btn-sm delete form-inline-group">Delete</button>                                 
                                </td>
                              </tr>`;
        }
        document.querySelector('#table-body').innerHTML = employeeRows;
    }).catch((error) => {
        console.error(error);
    });
};

//Add employee format table

let addEmployeeForm = document.querySelector('#add-employee-form');
addEmployeeForm.addEventListener('submit' , (e) => {
    e.preventDefault();  //to prevent auto form submission
    $('#add-employee').modal('hide'); // to close the modal

    let employee = {
        first_name : document.querySelector('#add-first-name').value,
        last_name : document.querySelector('#add-last-name').value,
        email: document.querySelector('#add-email').value,
        gender : document.querySelector('#add-gender').value,
        ip_address : document.querySelector('#add-ip-address').value,
    };
    let url = `${serverURL}/employees`;
    BrainHttp.post(url , employee).then((data) => {
        console.log(data);
        fetchEmployees();
    }).catch((error) => {
        console.error(error);
    });
    clearFormFields();
});

let clearFormFields = () => {
         document.querySelector('#add-first-name').value = '';
         document.querySelector('#add-last-name').value = '';
         document.querySelector('#add-email').value = '';
         document.querySelector('#add-gender').value = '';
         document.querySelector('#add-ip-address').value = '';
}