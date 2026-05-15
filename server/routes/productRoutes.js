const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct,
  deleteProduct,
  getSingleProduct,
  updateProduct,
} = require("../controllers/productController");

router.get("/", getProducts);

router.post("/", createProduct);

router.get("/:id", getSingleProduct);

router.put("/:id", updateProduct);

router.delete("/:id", deleteProduct);

module.exports = router;