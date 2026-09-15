// const Product = require("../models/Product");


// // GET PRODUCTS
// const getProducts = async (req, res) => {

//   try {

//     const products = await Product.find();

//     res.json(products);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });

//   }
// };


// // CREATE PRODUCT
// const createProduct = async (req, res) => {

//   try {

//     const product = await Product.create(req.body);

//     res.status(201).json(product);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });

//   }
// };

// // DELETE PRODUCT
// const deleteProduct = async (req, res) => {

//   try {

//     const product = await Product.findByIdAndDelete(
//       req.params.id
//     );

//     if (!product) {

//       return res.status(404).json({
//         message: "Product not found",
//       });

//     }

//     res.json({
//       message: "Product deleted successfully",
//     });

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });

//   }
// };

// // GET SINGLE PRODUCT
// const getSingleProduct = async (req, res) => {

//   try {

//     const product = await Product.findById(
//       req.params.id
//     );

//     if (!product) {

//       return res.status(404).json({
//         message: "Product not found",
//       });

//     }

//     res.json(product);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });

//   }
// };

// // UPDATE PRODUCT
// const updateProduct = async (req, res) => {

//   try {

//     const product = await Product.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//       }
//     );

//     if (!product) {

//       return res.status(404).json({
//         message: "Product not found",
//       });

//     }

//     res.json(product);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message,
//     });

//   }
// };

// module.exports = {
//   getProducts,
//   createProduct,
//   deleteProduct,
//   getSingleProduct,
//   updateProduct,
// };

const Product = require("../models/Product");

// =====================================================
// GET ALL PRODUCTS
// =====================================================

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json(products);
  } catch (error) {
    console.error("Get Products Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// =====================================================
// CREATE PRODUCT
// =====================================================

const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      category,
      image,
      images,
      isBestSeller,
    } = req.body;

    // -------------------------------------------------
    // PREPARE IMAGES
    // -------------------------------------------------

    let productImages = [];

    // New multiple images format
    if (Array.isArray(images)) {
      productImages = images.filter(
        (img) => typeof img === "string" && img.trim() !== ""
      );
    }

    // Backward compatibility with old single image
    if (
      productImages.length === 0 &&
      typeof image === "string" &&
      image.trim() !== ""
    ) {
      productImages = [image];
    }

    // At least one image is required
    if (productImages.length === 0) {
      return res.status(400).json({
        message: "At least one product image is required",
      });
    }

    // -------------------------------------------------
    // CREATE PRODUCT
    // -------------------------------------------------

    const product = await Product.create({
      name,
      description,
      price,
      stock,
      category,

      // Keep first image in old field
      // for compatibility with existing frontend.
      image: productImages[0],

      // Store all images
      images: productImages,

      isBestSeller: Boolean(isBestSeller),
    });

    res.status(201).json(product);
  } catch (error) {
    console.error("Create Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// =====================================================
// DELETE PRODUCT
// =====================================================

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json({
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.error("Delete Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// =====================================================
// GET SINGLE PRODUCT
// =====================================================

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(
      req.params.id
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Get Single Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// =====================================================
// UPDATE PRODUCT
// =====================================================

const updateProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      price,
      stock,
      category,
      image,
      images,
      isBestSeller,
    } = req.body;

    // -------------------------------------------------
    // PREPARE IMAGES
    // -------------------------------------------------

    let productImages;

    if (Array.isArray(images)) {
      productImages = images.filter(
        (img) => typeof img === "string" && img.trim() !== ""
      );
    }

    // If only old image field is sent
    if (
      (!productImages || productImages.length === 0) &&
      typeof image === "string" &&
      image.trim() !== ""
    ) {
      productImages = [image];
    }

    // -------------------------------------------------
    // PREPARE UPDATE DATA
    // -------------------------------------------------

    const updateData = {
      name,
      description,
      price,
      stock,
      category,
      isBestSeller: Boolean(isBestSeller),
    };

    // Only update images if images were provided
    if (productImages && productImages.length > 0) {
      updateData.images = productImages;

      // Keep old image field synced
      updateData.image = productImages[0];
    }

    // -------------------------------------------------
    // UPDATE PRODUCT
    // -------------------------------------------------

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Update Product Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// =====================================================
// EXPORT
// =====================================================

module.exports = {
  getProducts,
  createProduct,
  deleteProduct,
  getSingleProduct,
  updateProduct,
};