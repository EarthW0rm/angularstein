//nessa vai rolar transclude
export default class Bloco  implements ng.IDirective{

    restrict: 'E';
    template = 
    '<div class="col-md-4"> \
        <h2 ng-bind="title"></h2> \
        <div> \
            <ng-transclude></ng-transclude> \
        </div> \
    </div>';

    transclude = true;

    scope: any = { title:'@' };

    public link: (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any, transclude: ng.ITranscludeFunction) => void;


    constructor(){
        Bloco.prototype.link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes, ctrl: any, transclude: ng.ITranscludeFunction) => {
            console.log("ROLOU LINK");
        }
    }

    
    public static Factory()
    {
        var directive = () =>
        {
            return new Bloco();
        };

        directive['$inject'] = [''];

        return directive;
    }

}