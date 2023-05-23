const express = require("express");

const bodyParser = require("body-parser");
const path = require("path");

const usersRoute = require("./routes/users");
const landingRoute = require("./routes/landing");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use("/users", usersRoute);
app.use(landingRoute);

app.listen(3000);
