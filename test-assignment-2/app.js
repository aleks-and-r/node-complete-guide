const express = require("express");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("First");
//   next();
// });
// app.use("/", (req, res, next) => {
//   console.log("Second");
//   next();
// });
// app.use("/", (req, res) => {
//   console.log("Third");
//   res.send("<h1>Idemo</h1>");
// });

app.use("/users", (req, res, next) => {
  res.send("<ul><li>User 1</li><li> User 2</li></li></ul>");
});

app.use("/", (req, res, next) => {
  res.send("<h1>Landing page</h1>");
});


app.listen(3000);
