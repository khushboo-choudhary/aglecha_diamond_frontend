const mongoose = require("mongoose");

//to add new product to array  aaa
// new line
const DiamondProductsSchema = new mongoose.Schema(
  {
    title: { type: String, require: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const DiamondProducts = mongoose.model(
  "e-commercewebsites",
  DiamondProductsSchema
);
module.exports = DiamondProducts;
