//load the express
const express = require('express');

//initialize the express
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./api/apiRouter')

const hostname = '127.0.0.1';
const port = 3000;

//configure body-parser
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({extended : false})
app.use(jsonParser)
app.use(urlEncodedParser)

//configure cors
app.use(cors());

//configure the router
app.use('/api', apiRouter);

//get
app.get('/', (request, response) => {
  response.send(`<h2>Welcome to Express server of employee portal</h2>`);

});

app.listen(port, hostname, () => {
  console.log(`Express server started at http://${hostname}:${port}`);
})