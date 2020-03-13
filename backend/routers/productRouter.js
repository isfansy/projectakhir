const express = require("express");
const router = express.Router();
const { prodControl } = require("../controller");

router.post("/product-add", prodControl.addProduct);
router.get("/product-category", prodControl.getProductCategory);
router.get("/product", prodControl.getProduct);
router.delete("/deleteproduct/:selectedId", prodControl.deleteProduct);
router.put("/editproduct/:selectedIdEdit", prodControl.editProduct);

module.exports = router;
