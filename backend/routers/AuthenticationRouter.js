const express = require("express");
const { AuthenticationController } = require("../controller");

const router = express.Router();

router.post("/register", AuthenticationController.userregister);
router.put("/verifikasiemail", AuthenticationController.emailverifikasi);
router.post("/resendverifikasi", AuthenticationController.resendEmailVer);
router.get("/login", AuthenticationController.login);
router.get("/login/:id", AuthenticationController.login);

module.exports = router;
