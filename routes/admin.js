const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    '<form action="/product" method="POST" ><input type="text" name="title" /> <button>Submit</button></form>'
  );
});

router.post("/product", (req, res, next) => {
  console.log(req.body);
  // res.send('<h1>This is product page</h1>')
  res.redirect("/");
});

module.exports = router;
