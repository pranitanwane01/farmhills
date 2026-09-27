

// const express = require("express");

// const router = express.Router();

// const {
//   getProducts,
//   createProduct,
//   deleteProduct,
//   getSingleProduct,
//   updateProduct,
// } = require("../controllers/productController");

// // IMPORT MIDDLEWARE
// const {
//   protect,
//   admin,
// } = require(
//   "../middleware/authMiddleware"
// );

// // GET ALL PRODUCTS
// router.get(
//   "/",
//   getProducts
// );

// // CREATE PRODUCT
// router.post(
//   "/",
//   protect,
//   admin,
//   createProduct
// );

// // GET SINGLE PRODUCT
// router.get(
//   "/:id",
//   getSingleProduct
// );

// // UPDATE PRODUCT
// router.put(
//   "/:id",
//   protect,
//   admin,
//   updateProduct
// );

// // DELETE PRODUCT
// router.delete(
//   "/:id",
//   protect,
//   admin,
//   deleteProduct
// );

// module.exports = router;


const express = require("express");

const router = express.Router();

const {
  getProducts,
  getBestSellers,
  createProduct,
  deleteProduct,
  getSingleProduct,
  updateProduct,
} = require("../controllers/productController");

const {
  protect,
  admin,
} = require("../middleware/authMiddleware");

// =====================================================
// GET ALL PRODUCTS
// =====================================================

router.get("/", getProducts);

// =====================================================
// GET BEST SELLERS
// IMPORTANT: MUST COME BEFORE /:id
// =====================================================

router.get("/bestsellers", getBestSellers);

// =====================================================
// CREATE PRODUCT
// =====================================================

router.post("/", protect, admin, createProduct);

// =====================================================
// GET SINGLE PRODUCT
// =====================================================

router.get("/:id", getSingleProduct);

// =====================================================
// UPDATE PRODUCT
// =====================================================

router.put("/:id", protect, admin, updateProduct);

// =====================================================
// DELETE PRODUCT
// =====================================================

router.delete("/:id", protect, admin, deleteProduct);

module.exports = router;