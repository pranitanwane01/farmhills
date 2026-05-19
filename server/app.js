const express = require("express");
const cors = require("cors");

const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const authRoutes = require("./routes/authRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const uploadRoutes = require("./routes/uploadRoutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/products", productRoutes);

app.use("/api/orders", orderRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/payment", paymentRoutes);

app.use("/api/upload", uploadRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;
