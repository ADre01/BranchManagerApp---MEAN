var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/', {
        templateUrl: 'views/landing.html',
        controller: 'BranchController'
    }).
    when('/addBranch', {
        templateUrl: 'views/branchForm.html',
        controller: 'BranchController'
    }).
    when('/addProduct', {
        templateUrl: 'views/productForm.html',
        controller: 'ProductController'
    }).
    when('/viewProducts', {
        templateUrl:'views/viewProducts.html',
        controller: 'ProductController'
    }).
    when('/viewBranch/:branchId', {
        templateUrl: 'views/branchDetails.html',
        controller: 'BranchDetailsController'
    }).
    when('/viewProduct/:id', {
        templateUrl: 'views/productDetails.html',
        controller: 'ProductController'
    }).
    when('/editBranch/:branchid', {
        templateUrl: 'views/editBranch.html',
        controller: 'BranchController'
    }).
    when('/editProduct/:id', {
        templateUrl: 'views/editProduct.html',
        controller: 'ProductController'
    }).
    otherwise({
        redirectTo: '/'
    });
}]);