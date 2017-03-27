var mongoose = require('mongoose');
var dbURI = 'mongodb://appharbor_67mhdnb2:9g34l09avtare49ihut435a6qp@ds145677.mlab.com:45677/appharbor_67mhdnb2';

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

