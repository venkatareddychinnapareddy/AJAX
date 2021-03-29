import {BrainHttp} from  "./api/BrainHttp.js";
const serverURL = `http://127.0.0.1:3000/api`;

// GET Button
let getButton = document.querySelector('#get-btn');
getButton.addEventListener('click',function() {
    fetchEmployees();
});

let fetchEmployees = () => {

  // Actually we need to Ajax calls here but it will be clumpsy here so i created an another BrainHTTP.js file & imported into it

  let http = new BrainHttp();
  let url = `${serverURL}/employees`;
  http.get(url , (error , employees) => {
      if (error) throw error;
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
  });
};

//POST Button 
  let postButton = document.querySelector('#post-btn');
  postButton.addEventListener('click',() => {
    
    let url = `${serverURL}/employees`;
    let employee = {
        first_name : "Maldives",
        last_name : "Dine",
        email : "Malik@gmail.com",
        gender : 'Male',
        ip_address : '127.10.20.000'
    }

    let http = new BrainHttp();
    http.post(url , employee , (data) => {
        alert(JSON.stringify(data));
        fetchEmployees();
    });
  });

  //PUT button 
  let putButton = document.querySelector('#put-btn');
  putButton.addEventListener('click', () => {

    let empId = `VLITS12345`;
    let employee = {
      id : empId,
      first_name : 'Venkata reddy',
      last_name : 'chinnapareddy',
      email : 'chinnapareddy@ch.com',
      gender : 'Male',
      ip_address : '127.97.52.92'
    };

    let url = `${serverURL}/employees/${empId}`;
    let http = new BrainHttp();
    http.put(url , employee , (data) => {
      alert(JSON.stringify(data));
      fetchEmployees();
    });
  });

  //DELETE Button 
let deleteButton = document.querySelector('#delete-btn');
deleteButton.addEventListener('click' , () => {

  let employeeId = `VLITS13174`;

  let url = `${serverURL}/employees/${employeeId}`;
  let http = new BrainHttp();
  http.delete(url , (data) => {
    alert(JSON.stringify(data));
    fetchEmployees();
  });
});