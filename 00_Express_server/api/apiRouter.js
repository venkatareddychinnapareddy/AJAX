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
        ip_address : '127.0.0.1',
    },
    {
        id:'VLITS307431',
        first_name : 'Venor',
        last_name : 'Kim',
        email : 'Vencer@example.com',
        gender : 'male',
        ip_address : '127.0.0.7',
    }
]

//Get Employees

router.get('/employees' , (request, response) => {
    response.json(employees);
})

module.exports = router;