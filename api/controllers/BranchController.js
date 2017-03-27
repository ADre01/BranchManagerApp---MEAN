var mongoose = require('mongoose');
var Branch = mongoose.model('branches');
var Product = mongoose.model('products');

module.exports.viewBranches = function(req, res, next){
    Branch.find({}).then(function(branches){
        res.status(200).send(branches);
    }).catch(function(err){
        res.status(400).send(err);
    });
};

module.exports.addBranch = function(req, res, next){
  //Check if branch exists in database
    Branch.findOne({name: req.body.name}).then(function(branch){
        if(branch){
            console.log("branch already exists");;
            res.status(400).send({
                message: "Branch already exists"
            });
        }else{
            var newBranch = new Branch({
                name: req.body.name,
                address: req.body.address,
                product: []
            });
            newBranch.save(function(err, savedBranch){
               if(err){
                   console.log(err);
                   res.status(400).send(err);
               }else{
                   console.log(savedBranch);
                   res.status(200).send(savedBranch);
               }
            });
        }
    }).catch(function(err){
        console.log(err);
        res.send(err);
    });
};

module.exports.Details = function(req, res, next){
    Product.find({}).then(function(products){
       if(products){
           allProducts = products;
       }else{
           console.log("No products found");
       } 
    }).catch(function(err){
        console.log(err);
    });
  Branch.findOne({_id:req.params.id}).populate('products').then(function(branch){
      if(branch == null){
          res.status(404).send({
              message: "branch not found"
          });
      }else{
          res.status(200).send({branch: branch, prods: allProducts});
      }
  }).catch(function(err){
     console.log(err);
      res.send(err);
  });
};



module.exports.Update = function(req, res, next){
  Branch.findOne({_id:req.params.id}).then(function(branch){
     if(branch == null){
         console.log("Branch not found");
         res.status(404).send({
             message: "Branch not found"
         });
     }else{
         branch.name = req.body.name;
         branch.address = req.body.address;
         branch.save(function(err, updatedBranch){
            if(err){
                console.log(err);
                res.status(400).send(err);
            } 
            res.status(200).send(updatedBranch); 
         });
     } 
  }).catch(function(err){
      console.log(err);
      res.send(err);
  }); 
};



module.exports.addToBranch = function(req, res, next){
  Product.findOne({_id:req.body.productid}).then(function(product){
    var newProduct = product;
      console.log(newProduct);
      if(newProduct == null){
          console.log("Product not found");
          res.status(404).send({
              message: "Product not found"
          });
      }else{
          Branch.findOne({_id:req.body.branchid}).then(function(branch){
              branch.products.push(newProduct);
              branch.save(function(err, savedBranch){
                 if(err) return next(err);
                  res.send(savedBranch);
              });
          }).catch(function(err){
              console.log(err);
          })
      }
  }).catch(function(err){
     console.log(err); 
  });  
};


module.exports.deleteProductFromBranch = function(req, res, next){
  Branch.findOne({_id:req.body.branchid}).then(function(branch){
      var i = branch.products.indexOf(req.body.productid);
      if(i != -1){
          branch.products.splice(i, 1);
      }      
      branch.save(function(err, updatedBranch){
          if(err) return next(err);
          res.status(200).send(updatedBranch);
      });
  }).catch(function(err){
      console.log(err);
  });
};








