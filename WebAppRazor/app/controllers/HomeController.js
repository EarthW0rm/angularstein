angular.module('myApp', []).controller('HomeController', ['$scope', function($scope) {
    $scope.textData = 'Esse cara foi carregado pela HomeController, ela é uma controller básica';
}]);