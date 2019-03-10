const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 9090;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());


// API's
// Endpoints
// Where the frontend can send data to the backend

app.post('api/v1/user/', (request, response) => {

    console.log('NEW USER OBJECT:', request.body);

});

app.get('api/health', (request, response) => {
    response.json({
        status: 200
    });
});

app.listen(port, () => {
    console.log('App is alive on port:', port);
});

// Base url for API: http://localhost:9090

// GET request: http://localhost:9090/api/health
// POST request: http://localhost:9090/api/v1/user