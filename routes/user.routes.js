const router = require("express").Router();
const authController = require("../controllers/auth.controller.js");

router.post("/register", authController.signUP);

module.esports = router;
