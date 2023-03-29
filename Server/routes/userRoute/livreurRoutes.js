const router = require('express').Router();
const userControllers = require('../../controllers/userController/userController')


router.post('/add-livreur', userControllers.AddLivreur)


module.exports = router;