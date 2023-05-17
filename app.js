// const http = require("http");
const express = require("express");
const bodyParser = require('body-parser');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// it automatically sets up certain way of handling incoming requests that is a key characteristic of express.js
const app = express();

app.use(bodyParser.urlencoded({extended: false}));

// use allows us to add new middleware
// app.use('/add-product', (req, res, next) => {
//     console.log('This always run');
//     next(); // allows the request to continue to next middleware
// });

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST" ><input type="text" name="title" /> <button>Submit</button></form>')
// });

// app.use('/product', (req, res, next) => {
//     console.log(req.body);
//     // res.send('<h1>This is product page</h1>')
//     res.redirect('/')
// });
// app.use('/', (req, res, next) => {
//     // console.log('In the middleware');
//     res.send('<h1>Welcome to express node</h1>')
// });

app.use(adminRoutes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Page not found</h1>')
})

// const server = http.createServer(app);
// server.listen(3000);
// this line replaces http create server
app.listen(3000);

