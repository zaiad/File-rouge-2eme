const router = require("express").Router();

const categorieControllers = require("../../controllers/userController/categoryControllers");
const userControllers = require("../../controllers/userController/userController");

// Route of statistique
router.get("/get-users", userControllers.getUsers);
router.get("/user/:id", userControllers.getOneUser);

// Routes of categorie
router.get("/categorie", categorieControllers.getCategorie);
router.post("/add-categorie", categorieControllers.addCategorie);

module.exports = router;
