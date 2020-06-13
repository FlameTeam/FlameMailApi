const express = require("express");
const router = express.Router();

//Controllers import
const { sendMail } = require("../controllers/mailController");

//Mail routes
router.route("/mail/sendMail").post(sendMail);

module.exports = router;
