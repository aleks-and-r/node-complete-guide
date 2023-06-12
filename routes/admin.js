const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

const products = [];

router.get("/add-product", (req, res, next) => {
  //   res.send(
  //     '<form action="/admin/add-product" method="POST" ><input type="text" name="title" /> <button>Submit</button></form>'
  //   );
  //   res.sendFile(path.join(rootDir, "../", "views", "add-product.html"));
  // by using root dir no need for second argument "../"
  res.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(req.body);
  products.push({ title: req.body.title})
  // res.send('<h1>This is product page</h1>')
  res.redirect("/");
});

// module.exports = router;
exports.routes = router;
exports.products = products;
