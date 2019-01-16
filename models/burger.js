var orm = require("../config/orm.js");


var burger = {
  allBurgers: function(cb) {
    orm.allBurgers("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  addBurger: function(cols, vals, cb) {
    orm.addBurger(cols, vals, function(res) {
      cb(res);
    });
  },
  updateBurger: function(objColVals, condition, cb) {
    orm.updateBurger(objColVals, condition, function(res) {
      cb(res)
    })
  }
};

// Export the database functions for the controller
module.exports = burger;
