var express = require('express')
var mongoose = require('mongoose')


// *** config file *** //
var db_config = {
  development: "mongodb://localhost"
}

// *** mongoose *** ///
mongoose.connect(config.mongoURI[app.settings.env], function(err, res) {
  if(err) {
    console.log('Error connecting to the database. ' + err);
  } else {
    console.log('Connected to Database: ' + config.mongoURI[app.settings.env]);
  }
});
