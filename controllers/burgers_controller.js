//global variables
const express = require("express");
//global methods
const router = express.Router();
//model--only one for this project
const burger = require("../models/burger.js");

//putting routes here
router.get("/", function(req, res) {
res.send("Homepage")
})
//////////////////// END OF ROUTES /////////////////////////



module.exports = router;






