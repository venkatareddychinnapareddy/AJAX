
import {BrainHttp} from './api/BrainHttp.js';
const serverURL = `http://127.0.0.1:3000/api`;

//DOM Content Loaded

window.addEventListener('DOMContentLoaded' , () => {
 fetchAllEmployees();
});

let fetchAllEmployees = () => {

    let http = new BrainHttp();
    let url = `${serverURL}/employees`;
    http.get(url , (error , employees) => {
        if (error) throw Error;
        let employeeRows = '';
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
    });
};

//Add employee form

let addEmployeeForm = document.querySelector('#add-employee-form');
addEmployeeForm.addEventListener('submit' , (e) => {
    e.preventDefault();  // Prevent auto form submission
    $('#add-employee').modal('hide'); //to close the modal

    let employee = {
        first_name : document.querySelector('#add-first-name').value,
        last_name : document.querySelector('#add-last-name').value,
        email : document.querySelector('#add-email').value,
        gender : document.querySelector('#add-gender').value,
        ip_address : document.querySelector('#add-ip-address').value
    }
    let url  = `${serverURL}/employees`;
    let http = new BrainHttp();
    http.post(url, employee , (data) => {
        console.log(data);
        fetchAllEmployees();
        clearFormFields();
    });
});

let clearFormFields = () => {
          document.querySelector('#add-first-name').value = '',
          document.querySelector('#add-last-name').value = '',
          document.querySelector('#add-email').value = '',
          document.querySelector('#add-gender').value = '',
          document.querySelector('#add-ip-address').value = '';
};


//Click event on entire table bodyParser

let tableBody = document.querySelector('#table-body');
tableBody.addEventListener('click', (e) => {
    let targetElement = e.target;

    //Click On Delete Button
    if(targetElement.classList.contains('delete')){
       let selectedId = targetElement.parentElement.parentElement.firstElementChild.innerHTML;
       let url = `${serverURL}/employees/${selectedId}`;
       let http = new BrainHttp(); 
       http.delete(url , (data) => {
        console.log(data);
        fetchAllEmployees();
       });
    }

    //Click On Update Button
    if(targetElement.classList.contains('update')){
       let selectedId = targetElement.parentElement.parentElement.firstElementChild.innerHTML;
       let http = new BrainHttp(); 
       let url = `${serverURL}/employees`;
       http.get(url , (error , employees) => {
            if(error) throw error;
            let selectedEmployee = employees.find((employee) => {
                return employee.id === selectedId.trim();
            });
            populateUpdateModal(selectedEmployee);  //fetching data into the modal
       });
    }
});
    let populateUpdateModal = (selectedEmployee) => {
        document.querySelector('#update-emp-id').value = selectedEmployee.id;
        document.querySelector('#update-first-name').value = selectedEmployee.first_name;
        document.querySelector('#update-last-name').value = selectedEmployee.last_name;
        document.querySelector('#update-email').value = selectedEmployee.email;
        document.querySelector('#update-gender').value = selectedEmployee.gender;
        document.querySelector('#update-ip-address').value = selectedEmployee.ip_address;
        $('#update-employee').modal('show'); //to show the modal
    };  

 //Update Form Submission
    let updateEmployeeForm = document.querySelector('#update-employee-form');
    updateEmployeeForm.addEventListener('submit' , (e) => {
        let employeeID = document.querySelector('#update-emp-id').value.trim();
        e.preventDefault();
        $('#update-employee').modal('hide'); //to close the modal
        let employee = {
            first_name : document.querySelector('#update-first-name').value,
            last_name : document.querySelector('#update-last-name').value,
            email : document.querySelector('#update-email').value,
            gender : document.querySelector('#update-gender').value,
            ip_address : document.querySelector('#update-ip-address').value,
        };
        let url  = `${serverURL}/employees/${employeeID}`;
        let http = new BrainHttp();
        http.put(url, employee , (data) => {
            console.log(data);
            fetchAllEmployees();
        });
  });
