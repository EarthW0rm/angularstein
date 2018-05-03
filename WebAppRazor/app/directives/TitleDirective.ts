export default class Title {
    
    template: String = '<h2 ng-bind="title"></h3>';
    restrict: String = 'E';
    scope: any = {
        title: '@'
    };
}