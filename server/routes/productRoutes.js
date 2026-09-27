// const express = require("express");

// const router = express.Router();

// const {
//   getProducts,
//   createProduct,
//   deleteProduct,
//   getSingleProduct,
//   updateProduct,
// } = require("../controllers/productController");

// router.get("/", getProducts);

// router.post("/", createProduct);

// router.get("/:id", getSingleProduct);

// router.put("/:id", updateProduct);

// router.delete("/:id", deleteProduct);

// module.exports = router;

const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct,
  deleteProduct,
  getSingleProduct,
  updateProduct,
} = require("../controllers/productController");

// IMPORT MIDDLEWARE
const {
  protect,
  admin,
} = require(
  "../middleware/authMiddleware"
);

// GET ALL PRODUCTS
router.get(
  "/",
  getProducts
);

// CREATE PRODUCT
router.post(
  "/",
  protect,
  admin,
  createProduct
);

// GET SINGLE PRODUCT
router.get(
  "/:id",
  getSingleProduct
);

// UPDATE PRODUCT
router.put(
  "/:id",
  protect,
  admin,
  updateProduct
);

// DELETE PRODUCT
router.delete(
  "/:id",
  protect,
  admin,
  deleteProduct
);

module.exports = router;