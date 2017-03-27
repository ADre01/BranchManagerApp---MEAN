myApp.controller('BranchDetailsController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {


    $http.get('http://localhost:3000/api/branchDetails/' + $routeParams.branchId).then(function (onebranch) {
        $scope.mainbranch = onebranch.data.branch;
        $scope.allproducts = onebranch.data.prods;

    }).catch(function (err) {
        console.log(err);
    });



    $scope.addToBranch = function (productId) {
        var info = {
            productid: productId,
            branchid: $routeParams.branchId
        };
        $http.post('http://localhost:3000/api/addToBranch', info).then(function (updatedBranch) {
            console.log(updatedBranch);
            $route.reload();
            
        }).catch(function (err) {
            console.log(err);
        });
    };


    $scope.removeProductFromBranch = function (productId) {
        var info = {
            branchid: $routeParams.branchId,
            productid: productId
        };
        console.log(info);
        $http.post('http://localhost:3000/api/deleteProduct', info).then(function (updatedBranch) {
            console.log(updatedBranch);
        }).catch(function (err) {
            console.log(err);
        });
    };


}]);