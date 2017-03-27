var BranchCtrl = require('../controllers/BranchController');
var ProductCtrl = require('../controllers/ProductController');
var express = require("express");
var router = express.Router();


//router.get('/');

router.get('/viewBranches', BranchCtrl.viewBranches);

router.get('/viewProducts', ProductCtrl.viewProducts);

router.post('/addToBranch', BranchCtrl.addToBranch);

router.post('/addBranch', BranchCtrl.addBranch);

router.post('/addProduct', ProductCtrl.addProduct);

router.post('/deleteProduct', BranchCtrl.deleteProductFromBranch);

router.get('/branchDetails/:id', BranchCtrl.Details);

router.get('/productDetails/:id', ProductCtrl.Details);

router.put('/updateBranch/:id', BranchCtrl.Update);

router.put('/updateProduct/:id', ProductCtrl.Update);





module.exports = router;