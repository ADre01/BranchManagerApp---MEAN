var mongoose = require('mongoose');
var Product = mongoose.model('products');



module.exports.viewProducts = function(req, res, next){
  Product.find({}).then(function(products){
      res.status(200).send(products);
  }).catch(function(err){
      res.status(400).send(err);
  });
};


module.exports.Details = function(req, res, next){
    Product.find({_id:req.params.id}).then(function(product){
       if(product){
           res.status(200).send(product);
       }else{
           console.log("No products found");
       } 
    }).catch(function(err){
        console.log(err);
    });
};




module.exports.addProduct = function(req, res, next){
  Product.findOne({name:req.body.title}).then(function(product){
      if(product){
          console.log("This product already exists");
          res.status(400).send({
              message: "Product already exists"
          });
      }else{
          var newProduct = new Product({
             title: req.body.title,
              description: req.body.description,
              price: req.body.price
          });
          newProduct.save(function(err, savedProduct){
              if(err){
                  console.log(err);
                  res.status(400).send(err)
              }else{
                  console.log("Saved Product");
                  res.status(200).send(savedProduct)
              }
          });
      }
  }).catch(function(err){
     console.log(err);
      res.send(err);
  });
};

module.exports.Update = function(req, res, next){
  Product.findOne({_id:req.params.id}).then(function(product){
      if(product == null){
          console.log("Product not found");
          res.status(404).send({
              message: "Product not found"
          });
      }else{
          product.title = req.body.title;
          product.description = req.body.description;
          product.price = req.body.price;
          product.save(function(err, updatedProduct){
             if(err){
                 console.log(err);
                 res.status(400),send(err);
             }
             res.status(200).send(updatedProduct);  
          });
      }
  }).catch(function(err){
      console.log(err);
  });  
};