const express = require("express");
const router = express.Router();

//Controllers import
const { helloWorld } = require("../controllers/helloWorld");

//Mail routes
router.route("/mail/helloWorld").get(helloWorld);

module.exports = router;
