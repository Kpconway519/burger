//global variables
const express = require("express");
//global methods
const router = express.Router();
//model--only one for this project
const burger = require("../models/burger.js");





//putting routes here
router.get("/", function(req, res) {
    //remember to go back in here and add in the Handlebars options object after "index"
res.render("index")
  });

router.get("/api/burgers", function(req, res) {
    //res.json the database with all of the burgers in it.
})

//any other routes I need to add?

//I need a put route to add new burgers

//I need a thing which tells the server to swap burger from devoured:true to :false. 


//////////////////// END OF ROUTES /////////////////////////



module.exports = router;






