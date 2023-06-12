const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../util/path");

const adminData = require("./admin");

router.get("/", (req, res, next) => {
  // console.log('In the middleware');
  // res.send('<h1>Welcome to express node</h1>')
  const products = adminData.products;
  res.render("shop", { prods: products, docTitle: "ShopShop" });
  // console.log("shop.js", adminData.products);
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
