var mongoose = require('mongoose');
var dbURI = 'mongodb://localhost/branchManager';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log("Connected to database");
});

mongoose.connection.on('disconnected', function(){
    console.log("Disconnected from database");
});

mongoose.connection.on('error', function(err){
   console.log("Error ", err); 
});

