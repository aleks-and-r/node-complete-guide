// const http = require("http");
const express = require("express");

// it automatically sets up certain way of handling incoming requests that is a key characteristic of express.js
const app = express();

// use allows us to add new middleware
app.use('/', (req, res, next) => {
    console.log('This always run');
    next(); // allows the request to continue to next middleware
});

app.use('/product', (req, res, next) => {
    res.send('<h1>This is product page</h1>')
});
app.use('/', (req, res, next) => {
    console.log('In the middleware');
    res.send('<h1>Welcome to express node</h1>')
});



// const server = http.createServer(app);
// server.listen(3000);
// this line replaces http create server
app.listen(3000);

