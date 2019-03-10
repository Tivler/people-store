const express    = require('express');
const bodyParser = require('body-parser');
const cors       = require('cors')

const app = express();

const port = process.env.PORT || 9090;

app.use(express.static(__dirname + '/'));
app.use(bodyParser.json());

// Allow requests from all domains to hit this API for dev purposes only
app.use(cors());

// API's
// Endpoints
// Where the frontend can send data to the backend

// POST request: http://localhost:9090/api/v1/user
app.post('/api/v1/user/', (request, response) => {

    console.log('NEW USER OBJECT:', request.body);

    response.send('user stored');

});

// GET request: http://localhost:9090/api/health
app.get('/api/health/', (request, response) => {
    response.json({
        status: 200
    });
});

app.listen(port, () => {
    console.log('App is alive on port:', port);
});
