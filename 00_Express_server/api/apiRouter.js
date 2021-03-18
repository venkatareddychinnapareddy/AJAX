const express = require('express');
const router = express.Router();


//REST API configuration

// Employees database

let employees = [
    {
        id:'VLITS56982',
        first_name : 'John',
        last_name : 'Doe',
        email : 'john@example.com',
        gender : 'male',
        ip_address : '127.0.0.1'
    },
    {
        id:'VLITS307431',
        first_name : 'Venor',
        last_name : 'Kim',
        email : 'Vencer@example.com',
        gender : 'male',
        ip_address : '127.0.0.7'
    }
]

// Get ID

let getID = () => {
    '' + Math.random().toString(36).substr(2,10);
}
 
// Get Employees

router.get('/employees' , (request, response) => {
    console.log(`POST Request received at server  .. ${new Date().toLocaleTimeString()}`);
    response.json(employees);
})


// POST Request 

router.post('/employees', (request , response) => {
    let employees  = {

        id: getID(),
        first_name :    request.body.first_name,
        last_name :     request.body.last_name,
        email :         request.body.email,
        gender :        request.body.gender,
        ip_address :    request.body.ip_address
    };
    employees.push(employee);
    console.log(`POST Request received at server  .. ${new Date().toLocaleTimeString()}`);
    response.JSON({msg : 'Post request is Success'});
});

// PUT Request

router.put('/employees/:id' , (request,response) => {

    let empId = request.params.id;
    let updateEmployee = {
        id : empID,
        first_name :    request.body.first_name,
        last_name :     request.body.last_name,
        email :         request.body.email,
        gender :        request.body.gender,
        ip_address :    request.body.ip_address
    };
    let existingEmployee = employee.find((employee) => {
        return employee.id === empId;
    });
    employees.splice(employees.indexOf(existingEmployee),1,updateEmployee());
    console.log(`PUT Request received at server  .. ${new Date().toLocaleTimeString()}`);
    response.JSON({msg : 'PUT request is Success'});
});

//Delete Request 

router.delete('/employees/:id' , (request,response) => {
    let empId = request.params.id;
    employees.employees.filter((employee) => {
        return employee.id !== empId;
    });
    console.log(`DELETE Request received at server  .. ${new Date().toLocaleTimeString()}`);
    response.JSON({msg : 'DELETE request is Success'});
});

module.exports = router;

