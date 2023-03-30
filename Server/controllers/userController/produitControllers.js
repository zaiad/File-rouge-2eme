const Categorie = require("../../models/categoryModel");
const Product = require("../../models/productModel");
const fs = require("fs");

const path = require("path");

const getProduct = async (req, res) => {
  const produit = await Product.find().populate({path: 'categorie', model: Categorie});
  const categorie = await Categorie.find({status: true})
  res.json({produit, categorie})
};
const addProduct = async (req, res) => {
  const { title, description, price, categorie } = req.body;
  if (!title || !description || !price || !categorie)
    res.status(400).json({ message: "Fill the all fields to add product" });
    const title_exist = await Product.findOne({ title });
    if (title_exist)
    return res
    .status(400)
    .json({ message: `this name ${title} already exist` });
const category = await Categorie.findOne({ categorie });
  if (category) return res.status(400).json({ message: "Invalid Category" });
  const add_produit = await Product.create({
    title,
    categorie: categorie._id,
    description,
    price,
    image: req.file.filename,
  });
  return res.json({ message: `the phone ${add_produit.title} is added` });
};

const updatProduit = async (req, res) => {
  const {body} = req
  const id = req.params.id
  if(!id || !body.title || !body.description || !body.price || !body.categorie) throw Error('Fill the all fields to add product')
  const categorie = await Categorie.findOne({name: body.categorie})
  if (!categorie) throw Error("Invalid Category")
  const product = await Product.findById(id);
  if (!product) {
    throw Error('Product not found');
  }
  // const oldFilename = product.image;
  const update_produit = await Product.findByIdAndUpdate(
      id, {
          ...body,
          categorie: categorie._id
      }
      )
  //     if (req.file && req.file.filename) {
  //       update_produit.image = req.file.filename;
  //     }

  // if(!update_produit) throw Error('Error, try again')
  // if (req.file && oldFilename) {
  //   fs.unlink(path.join(__dirname, 'public', oldFilename), (err) => {
  //     if (err) {
  //       console.error(err);
  //     }
  //   });
  // }
  res.json({message: `Product ${body.title} is updated`, update_produit})
}

const deletProduct = async (req, res) => {
  const id = req.params.id
  const find_product = await Product.findById(id)
  if(!find_product) throw Error('Error, Product not found')
  if(find_product.status) await Product.findByIdAndUpdate(id, { status: false})
  if(find_product.status) res.json({message: 'delete successfully'})
  if(!find_product.status) await Product.findByIdAndUpdate(id, { status: true})
  if(!find_product.status) res.json({message: 'reset successfully'})
}

module.exports = {
  getProduct,
  addProduct,
  updatProduit,
  deletProduct,
};
