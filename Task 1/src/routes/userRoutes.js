const express = require('express')
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

const router = express.Router();

router.route("/signup")
    .post(authController.signUp)
router.route("/login")
    .post(authController.login)

router.route("/")
    .get(userController.getAllUser)
    .post(authController.protect, userControllercreateUser)

router.route("/:id")
    .get(authController.protect, userController.getOneUser)
    .patch(authController.updateUser)
    .delete(authController.protect, userController.deleteUser)

router.route("/forgotpassword")
    .post(authController.forgotPassword)
router.route("/resetpassword/:token")
    .post(authController.resetPassword)

module.exports = router;