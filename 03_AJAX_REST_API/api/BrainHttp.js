export class BrainHttp {
    constructor(){
        this.http = new XMLHttpRequest();
 }

  // GET Request
   get = (url , callback) => {
       this.http.open('GET', url, true);
       this.http.send();
       this.http.onload = () => {
            if (this.http.status === 200) {
                let data = this.http.responseText;
                let employees = JSON.parse(data);
                callback(null,employees);
            }
            else {
                callback(`Error : ${this.http.status}`);
            }
       };
   };
}