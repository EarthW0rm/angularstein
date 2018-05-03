
import './controllers/HomeController';
import './controllers/AboutController';


var myApp = angular.module('myApp');

import StartedController from './StartedController';
myApp.controller('StartedController', StartedController);

import Title from './directives/TitleDirective';
myApp.directive('titleApp', Title);

import Bloco from './directives/BlocoDirective';
myApp.directive('blocoApp', Bloco);

