myApp.controller('BranchController', ['$scope', '$http', '$location', '$routeParams', function ($scope, $http, $location, $routeParams) {
    $scope.addBranch = function () {
        var branch = {
            name: $scope.branch.name,
            address: $scope.branch.address
        };
        $http.post('http://localhost:3000/api/addBranch', branch).then(function (savedBranch) {
            console.log(savedBranch);
            $location.path('/');
        }).catch(function (err) {
            console.log(err);
        });
    };
    

    $http.get('http://localhost:3000/api/viewBranches').then(function(branches){
          $scope.ALLbranches = branches.data;
      }).catch(function(err){
          console.log(err);
      });      

    $scope.editBranch = function(){
      $http.get('http://localhost:3000/api/branchDetails/' + $routeParams.branchid).then(function(getbranch){
          $scope.branch = getbranch.data.branch;
          console.log($scope.branch);
      }).catch(function(err){
         console.log(err); 
      });
    };
    
    $scope.updateBranch = function(){
      var branch = {
          name: $scope.branch.name,
          address: $scope.branch.address
      };
        $http.put('http://localhost:3000/api/updateBranch/' + $routeParams.branchid, branch).then(function(updatebranch){
           console.log(updatebranch);
            $location.path('/');
        }).catch(function(err){
            console.log(err);
        });
    };
    
    
}]);