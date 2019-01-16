//global variables
const express = require("express");
//global methods
const router = express.Router();
//model--only one for this project
const burger = require("../models/burger.js");

//putting routes here
router.get("/", function(req, res) {
    burger.allBurgers(function(data) {
        var hbsObject = {
          burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
      });
    
});

router.get("/api/burgers", function(req, res) {
    //res.json the database with all of the burgers in it.
    burger.allBurgers(function(data) {
        res.json(data)
    })
})

router.get("/kevinssupersecretpagekeepout", function(req, res) {
    res.send("If you're not Kevin, please keep out.")
})

//I need a put route to add new burgers
router.post("/api/burger", function(req, res) {
    burger.addBurger([
      "burger_name", "devoured"
    ], [
      req.body.name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json(result)
    });
  })
//I need a thing which tells the server to swap burger from devoured:true to :false. 
router.put("/api/burger/swap", function(req, res) {
    var id = req.body.id;
    var condition = `id = ${id}`
   
//if it is devoured, make it edible again
        burger.updateBurger(req.body.devoured, condition, function(result) {
            res.json(result)
});
})
//////////////////// END OF ROUTES /////////////////////////



module.exports = router;






