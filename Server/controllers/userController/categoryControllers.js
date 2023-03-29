const db = require("../../models");


// Create Main Model
const Categorie = db.categorie;

const getCategory = async(req,res) => {
    const categorie = await Categorie.find();
    res.json({categorie})
}

const addCategory = async(req, res) => {
    const { name } = req.body;
    if (!name) res.send("content can not be empty");
    const find_categorie = await Categorie.findOne({ name });
    if (find_categorie) res.send(`You can't to add categorie ${name}`);
    else {
      const category = await Categorie.create({
        name: name,
      });
      if (!category) res.send("Error, you can to add user");
      if (category) res.json({message: `category ${category.name} is added`});
    }
}
const updateCategory = async (req, res) => {
    const id = req.params.id
    const name = req.body.name
    if (!name) res.send("content can not be empty");
    const find_categorie = await Categorie.findById(id);
    if (!find_categorie) throw Error("Category not found");
    const second_categorie = await Categorie.findOne({name: name})
    if (second_categorie) throw Error(`${name} is already existed`);
    const update_user = await Categorie.findByIdAndUpdate({_id: id}, {name: name});
    res.json({message: `Categorie ${name} is updated`});
  };

  const deleteCategory = async (req, res) => {
    const id = req.params.id
    const find_categorie = await Categorie.findById(id)
    if(!find_categorie) throw Error('Error, Product not found')
    if(find_categorie.status) await Categorie.findByIdAndUpdate(id, { status: false });
    if(!find_categorie.status) await Categorie.findByIdAndUpdate(id, { status: true });
    if(find_categorie.status) res.json({message: 'delete successfully'})
    if(!find_categorie.status) res.json({message: 'reset successfully'})
  }

module.exports = {
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
}