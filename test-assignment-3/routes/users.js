const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  // console.log('In the middleware');
  // res.send('<h1>Welcome to express node</h1>')
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router;
