// Require packages and set the port
const express = require('express');
const port = 8081;
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes/routes');
const path = require('path');

// Use Node.js body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));

app.use('/static', express.static('public'))

//routes(app);

app.get('/', function (req, res){
  res.sendFile(path.join(__dirname, '/Portal.html'))
})

// Start the server
const server = app.listen(port, (error) => {
    if (error) return console.log(`Error: ${error}`);

    console.log(`Server listening on port ${server.address().port}`);
});
