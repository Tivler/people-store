const express = require('express');
const app = express();

const port = process.env.PORT || 9090;

app.use(express.static(__dirname + '/'));

app.listen(port, () => {
    console.log('App is alive on port:', port);
});
