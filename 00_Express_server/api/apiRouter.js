const { response } = require("express");
const express = require("express");
const router = express.Router();

//employee data
let employees = [
  {
    id: "VLITS12345",
    first_name: "John",
    last_name: "Smith",
    email: "johnsmith@gmail.com",
    gender: "Male",
    ip_address: "127.0.0.1"
  },
  {
    id: "VLITS56978",
    first_name: "Laura",
    last_name: "Williams",
    email: "laurawilliams@gmail.com",
    gender: "Female",
    ip_address: "128.306.90"
  }
];

//GET - Employees
router.get("/employees", (request, response) => {
  response.json(employees);
});

//GET ID
let getID = () => {
  return "VLITS" + Math.random().toString().substr(2,5);
};

//post Request
router.post("/employees", (request, response) => {
  let employee = {
    id: getID(),
   first_name : request.body.first_name,
   last_name : request.body.last_name,
   email : request.body.email,
   gender : request.body.gender,
   ip_address : request.body.ip_address
  };
  employees.push(employee);
  console.log(
    `POST Request Received at server ..${new Date().toLocaleTimeString()}`
  );
  response.json({ msg: "POST Request is Success" });
});

//PUT Request
router.put("/employees/:id", (request, response) => {
  let empId = request.params.id;
  let updateEmployee = {
    id: empId,
    first_name: request.body.first_name,
    last_name: request.body.last_name,
    email: request.body.email,
    gender: request.body.gender,
    ip_address: request.body.ip_address,
  };
  let existingEmployee = employees.find((employee) => {
    return employee.id === empId;
  });
  employees.splice(employees.indexOf(existingEmployee), 1, updateEmployee);
  console.log(
    `PUT Request Received at server ..${new Date().toLocaleTimeString()}`
  );
  response.json({ msg: "PUT Request is Success" });
});

//DELETE Request
router.delete("/employees/:id", (request, response) => {
  let empId = request.params.id;
  employees = employees.filter((employee) => {
    return employee.id !== empId;
  });

  console.log(
    `DELETE Request Received at server ..${new Date().toLocaleTimeString()}`
  );
  response.json({ msg: "DELETE Request is Success" });
});
module.exports = router;
