const router = require("express").Router();



const categorieControllers = require("../../controllers/userController/categoryControllers");

// Routes of categorie
router.get("/categorie", categorieControllers.getCategorie);
router.post("/add-categorie", categorieControllers.addCategorie);

module.exports = router