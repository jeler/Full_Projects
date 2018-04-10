var mongoose = require("mongoose")
var path = require("path");
var fs = require("fs");

mongoose.connect('mongodb://heroku_9d5n71bp:4a9ip7efrm1vj07h4o84sr6f8j@ds241039.mlab.com:41039/heroku_9d5n71bp');

var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
    if(file.indexOf('.js') >= 0) {
      // require the file (this runs the model file which registers the schema)
      require(models_path + '/' + file);
     }
  })