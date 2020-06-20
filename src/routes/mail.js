const express = require("express");
const router = express.Router();

//Controller import
const { sendMailController } = require("../controllers/mailController");

//Mail routes
router.route("/mail/sendMail").post(sendMailController);

module.exports = router;
