const router = require("express").Router();

const categorieControllers = require("../../controllers/userController/categoryControllers");
const userControllers = require("../../controllers/userController/userController");

// Route of statistique
router.get("/get-users", userControllers.getUsers);
router.get("/user/:id", userControllers.getOneUser);

// Routes of categorie
router.get("/category", categorieControllers.getCategory);
router.post("/add-category", categorieControllers.addCategory);
router.put('/update-category/:id', categorieControllers.updateCategory)
router.delete('/delete-category', categorieControllers.deleteCategory)

module.exports = router;
