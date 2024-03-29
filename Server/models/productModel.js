const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    title: String,
    quantity: {
      type: Number,
      default: 0,
    },
    categorie: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Categorie",
      },
    ],
    description: String,
    price: Number,
    image: String,
    status: {
      type: Boolean,
      default: true,
    },
  })
);

module.exports = Product;
