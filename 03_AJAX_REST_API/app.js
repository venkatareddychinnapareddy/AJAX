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