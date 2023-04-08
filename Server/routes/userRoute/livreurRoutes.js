const router = require("express").Router();
const userControllers = require("../../controllers/userController/userController");
const statistiqueControllers = require("../../controllers/userController/statistiqueControllers");
const commandeController = require("../../controllers/userController/commandeController");
const errorHandller = require("../../middlewares/errorHandler");

router.get("/", statistiqueControllers.statistiqueLivreur);
router.post("/add-livreur", userControllers.AddLivreur);
router.get("/get-command/:token", commandeController.getCommandLivruer);
router.post("/status-command", commandeController.statusCommand);

router.use(errorHandller);

module.exports = router;
