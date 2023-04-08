const router = require("express").Router();

const categorieControllers = require("../../controllers/userController/categoryControllers");
const userControllers = require("../../controllers/userController/userController");
const productControllers = require("../../controllers/userController/produitControllers");
const statistique = require("../../controllers/userController/statistiqueControllers");
const commandeController = require("../../controllers/userController/commandeController");
const uploadImage = require("../../utils/uploadImage");
const errorHandller = require("../../middlewares/errorHandler");

// Route of statistique
router.get("/statistique", statistique.statistique);
router.get("/get-users", userControllers.getUsers);
router.get("/user/:id", userControllers.getOneUser);

// Routes of categorie
router.get("/category", categorieControllers.getCategory);
router.post("/add-category", categorieControllers.addCategory);
router.put("/update-category/:id", categorieControllers.updateCategory);
router.delete("/delete-category/:id", categorieControllers.deleteCategory);

// Routes of product
router.get("/product", productControllers.getProduct);
router.post(
  "/add-product",
  uploadImage.single("image"),
  productControllers.addProduct
);
router.put(
  "/update-product/:id",
  uploadImage.single("image"),
  productControllers.updatProduit
);
router.delete("/delete-product/:id", productControllers.deletProduct);

// Routes of command
router.get("/command", commandeController.getCommand);
router.post("/assign-command", commandeController.assignCommand);
router.post("/add-command", commandeController.addCommand);

router.use(errorHandller);

module.exports = router;
