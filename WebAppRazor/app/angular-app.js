import StartedController from './StartedController'

var myApp = angular.module('myApp',[]);

myApp.controller('HomeController', ['$scope', function($scope) {
  $scope.textData = 'Esse cara foi carregado pela HomeController, ela é uma controller básica';
}]);

myApp.controller('StartedController', StartedController);

