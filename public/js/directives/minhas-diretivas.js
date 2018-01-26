angular.module('minhasDiretivas', [])
.directive('meuPainel', function(){
    
    var ddo = {};

    //define o uso. A = Atributo, E = Elemento
    ddo.restrict = 'AE';
    ddo.transclude = true;

    //caso o valor passado seja igual o nome da propriedade do
    //objeto pode usar apenas o '@'
    ddo.scope = {
        titulo: '@titulo'
    };

    // ddo.templateUrl = 'js/directives/meu-painel.html';

    ddo.template = '<div class="panel panel-default">'
                    +'<div class="panel-heading">'
                    +'<h3 class="panel-title text-center">{{ titulo }}</h3> '
                    +'</div>'    
                    +'<div class="panel-body" ng-transclude>'
                    +'</div>'
                    +'</div>';

    return ddo;
})
.directive('minhaFoto', function(){
    var ddo = {};
    ddo.restrict = 'AE';
    ddo.scope = {
        url: '@',
        titulo: '@'
    };

    ddo.template = '<img class="img-responsive center-block" src="{{ url }}" alt=" {{ titulo }}">';
    
    return ddo;
});