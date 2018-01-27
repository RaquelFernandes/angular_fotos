angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){

    $scope.foto = {};
    $scope.mensagem = '';

    if($routeParams.fotoId){
        $http.get('v1/fotos/' + $routeParams.fotoId)
        .success(function(foto) {
            $scope.foto = foto;
        }).error(function (err) {
            console.log(err);
            mensagem = 'Não foi possível recuperar a foto';
        });
    }

    $scope.submeter = function(){
    
        if ($scope.formulario.$valid) {

            if ($routeParams.fotoId) {
                
                $http.put('v1/fotos/'+ $scope.foto._id, $scope.foto)
                .success(function (foto) {
                    $scope.mensagem = 'Foto alterada com sucesso';
                }).error(function(err) {
                    $scope.mensagem = 'Erro ao alterar a foto.';
                    console.log(err);
                })
            }
            else {
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
        }
        else {
            alert('VERIFIQUE O FORMULÁRIO');
        }
    };

});