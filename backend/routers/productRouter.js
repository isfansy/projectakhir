const express = require("express");
const router = express.Router();
const { prodControl } = require("../controller");

router.post("/product-add", prodControl.addProduct);
router.get("/product-category", prodControl.getProductCategory);

module.exports = router;
