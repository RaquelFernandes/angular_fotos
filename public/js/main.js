angular.module('alurapic', ['minhasDiretivas','ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider){

    $locationProvider.html5Mode(true);

    $routeProvider.when('/fotos', {
        templateUrl:'partials/lista.html',
        controller:'FotosController'
    });

    $routeProvider.when('/fotos/inserir', {
        templateUrl:'partials/foto.html',
        controller:'FotoController'
    });

    $routeProvider.when('/fotos/editar/:fotoId', {
        templateUrl:'partials/foto.html',
        controller: 'FotoController'
    });

    $routeProvider.otherwise({ redirectTo:'fotos'});

});