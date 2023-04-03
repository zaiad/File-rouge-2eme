const router = require("express").Router();
const { authPermission } = require("../../middlewares/permission");
const errorHandller = require('../../middlewares/errorHandler')
const authController = require("../../controllers/authController/authController");

router.post("/register", authController.register);
router.post("/login", authController.login);
// router.get('/verify-email/:token', authController.verifyEmail)
router.post("/forgot-password", authController.forgotPassword);
router.post('/reset-password', authController.resetPassword)
router.get("/verify-forgot-password/:token", authController.verifyForgotPassword);
router.post('/form-forgot-password', authController.formForgotPassword);
router.get('/logout', authController.logout)

router.use(errorHandller);

module.exports = router;
