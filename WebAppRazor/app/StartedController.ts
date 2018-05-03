import '../node_modules/angular/angular';

export default class StartedController implements ng.IComponentController  { 
    
    public static $inject: string[] = ["$scope", "$http"];

    constructor(protected $scope: any , protected $http: ng.IHttpProvider)
    {
        this.$scope.message = "Frankenstein is alive, its alive....More Energy."
    }
}



