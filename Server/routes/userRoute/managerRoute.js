const router = require("express").Router();

const categorieControllers = require("../../controllers/userController/categoryControllers");
const userControllers = require("../../controllers/userController/userController");
const productControllers = require('../../controllers/userController/produitControllers')
const uploadImage = require('../../utils/uploadImage')
const errorHandller = require('../../middlewares/errorHandler')


// Route of statistique
router.get("/get-users", userControllers.getUsers);
router.get("/user/:id", userControllers.getOneUser);

// Routes of categorie
router.get("/category", categorieControllers.getCategory);
router.post("/add-category", categorieControllers.addCategory);
router.put('/update-category/:id', categorieControllers.updateCategory)
router.delete('/delete-category/:id', categorieControllers.deleteCategory)

// Routes of product
router.get('/product', productControllers.getProduct)
router.post('/add-product',uploadImage.single('image') ,productControllers.addProduct)
router.put('/update-product/:id',uploadImage.single('image') ,productControllers.updatProduit)
router.delete('/delete-product/:id', productControllers.deletProduct)

router.use(errorHandller);

module.exports = router;
