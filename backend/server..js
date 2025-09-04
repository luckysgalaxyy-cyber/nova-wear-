const express = require("express");
const cors = require("cors");
const products = require("./products.json");

const app = express();
app.use(cors());

// API endpoint for products
app.get("/api/products", (req, res) => {
  res.json(products);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
