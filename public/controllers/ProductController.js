myApp.controller('ProductController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
    
    $http.get('http://localhost:3000/api/viewProducts').then(function(products){
        $scope.ALLproducts = products.data;
    }).catch(function(err){
       console.log(err); 
    });
    
    
    //Add product to database
    $scope.addProduct = function(){
        var product =   {
            title: $scope.product.title,
            description: $scope.product.description,
            price: $scope.product.price
        }
        $http.post('http://localhost:3000/api/addProduct', product).then(function(savedProduct){
            console.log(savedProduct);
            $location.path('/');
        }).catch(function(err){
            console.log(err);
        });
        $location.path('/');
    };
    
    
    $scope.editProduct = function(){
      $http.get('http://localhost:3000/api/productDetails/' + $routeParams.id).then(function(getproduct){
          $scope.product = getproduct.data[0];
      }).catch(function(err){
         console.log(err); 
      });
    };
    
    
    $scope.updateProduct = function(){
      var product =   {
            title: $scope.product.title,
            description: $scope.product.description,
            price: $scope.product.price
        }
      $http.put('http://localhost:3000/api/updateProduct/' + $routeParams.id, product).then(function(getProduct){
         console.log(getProduct);
          $location.path('/');
      }).catch(function(err){
          console.log(err);
      });
    };
    
}]);