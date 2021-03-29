import {BrainHttp} from './api/BrainHttp.js';
let serverURL = `http://127.0.0.1:3000/api`;

//DOM content loaded. It fetches the data that written in server

window.addEventListener('DOMContentLoaded' , () => {
 fetchEmployees();
});

let fetchEmployees = () => {
    let url = `${serverURL}/employees`;
    axios.get(url).then((response) => {
        let employees = response.data;
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
    axios.post(url , employee).then((response) => {
        console.log(response.data);
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
};


//click on table body 
let tableBody = document.querySelector('#table-body');
tableBody.addEventListener('click', (e) => {
    let targetElement = e.target;
    //Delete button
    if(targetElement.classList.contains('delete')){
        let selectedID = targetElement.parentElement.parentElement.firstElementChild.innerHTML;
        let url = `${serverURL}/employees/${selectedID}`;
        axios.delete(url).then((response) => {
            console.log(response.data);
            fetchEmployees();
        }).catch((error) => {
            console.log(error);
        });

    }
    // Update button
    if(targetElement.classList.contains('update')){
       let selectedID = targetElement.parentElement.parentElement.firstElementChild.innerHTML;
       let url = `${serverURL}/employees`;
       axios.get(url).then((response) => {
            let employees = response.data;
            let selectedEmployee = employees.find((employee) => {
                return employee.id  === selectedID.trim();
            });
            populateUpdateEmployeeModal(selectedEmployee);
       }).catch((error) => {
        console.error(error);
       });
    }
});

let populateUpdateEmployeeModal = (selectedEmployee) => {
        document.querySelector('#update-emp-id').value = selectedEmployee.id;
        document.querySelector('#update-first-name').value = selectedEmployee.first_name;
        document.querySelector('#update-last-name').value = selectedEmployee.last_name;
        document.querySelector('#update-email').value = selectedEmployee.email;
        document.querySelector('#update-gender').value = selectedEmployee.gender;
        document.querySelector('#update-ip-address').value = selectedEmployee.ip_address;
        $('#update-employee').modal('show'); //to show the modal
};

//Update employee form
let updateEmployeeForm = document.querySelector('#update-employee-form');
updateEmployeeForm.addEventListener('submit' , () => {

        let updateEmployeeID = document.querySelector('#update-emp-id').value.trim();
        let url = `${serverURL}/employees/${updateEmployeeID}`;
        $('#update-employee').modal('hide'); //to close the modal
        let employee = {
            first_name : document.querySelector('#update-first-name').value,
            last_name : document.querySelector('#update-last-name').value,
            email : document.querySelector('#update-email').value,
            gender : document.querySelector('#update-gender').value,
            ip_address : document.querySelector('#update-ip-address').value,
        };
        axios.put(url , employee).then((response) => {
            console.log(response.data);
            fetchEmployees();
        }).catch((err) => {
            console.error(err);
        });
    }); 