const Categorie = require('../../models/categoryModel'); 
const Produit = require('../../models/productModel'); 
const User = require('../../models/userModel')
const Command = require('../../models/commandModel')


const statistiqueLivreur =async (req, res) => {
    const command = await Command.count()

    res.json({command})
}

const statistique = async (req, res) => {
    const categorie = await Categorie.count()
    const produit = await Produit.count()
    const user = await User.count()

    res.json({categorie, produit, user})
}

module.exports = {
    statistique,
    statistiqueLivreur
}