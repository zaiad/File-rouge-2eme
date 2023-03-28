const mongoose = require("mongoose");

const Categorie = mongoose.model(
    "Categories",
    new mongoose.Schema({
        name: String,
        status: {
        type: Boolean,
        default: true
        }
    })
);

module.exports = Categorie;
