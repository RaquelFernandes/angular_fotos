angular.module('alurapic').controller('FotoController', function($scope, $http){

    $scope.foto = {};
    $scope.mensagem = '';

    $scope.submeter = function(){
        if ($scope.formulario.$valid) {
            $http.post('v1/fotos', $scope.foto)
            .success(function(){
                $scope.mensagem = 'Foto cadastrada com sucesso.';
                $scope.foto = {};
            })
            .error(function(erro){
                 $scope.mensagem = 'Erro ao salvar a foto.';
                console.log(erro);
            });    
        }
        else {
            alert('VERIFIQUE O FORMULÁRIO');
        }
    };

});