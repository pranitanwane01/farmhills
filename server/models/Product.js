

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    // PRODUCT NAME
    name: {
      type: String,
      required: true,
      trim: true,
    },

    // PRODUCT DESCRIPTION
    description: {
      type: String,
      required: true,
      trim: true,
    },

    // PRODUCT PRICE
    price: {
      type: Number,
      required: true,
      min: 0,
    },

    // PRODUCT STOCK
    stock: {
      type: Number,
      required: true,
      min: 0,
    },

    // PRODUCT CATEGORY
    category: {
      type: String,
      required: true,
      trim: true,
    },

    // OLD SINGLE IMAGE
    // Kept temporarily so existing products continue working.
    image: {
      type: String,
      default: "",
    },

    // NEW: MULTIPLE PRODUCT IMAGES
    images: {
      type: [String],
      default: [],
    },

    // BEST SELLER
    isBestSeller: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);