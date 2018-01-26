angular.module('alurapic').controller('FotosController', function($scope, $http){

        // $scope.foto = {
        //     url:"https://s-media-cache-ak0.pinimg.com/originals/fb/8a/e0/fb8ae0a2d05fe263aeb87a4a3233a47d.jpg",
        //     titulo:"gatinho fofinho pedindo petisco"
        // };


        $scope.fotos = [];
        $scope.filtro = '';
        $scope.mensagem = '';

        $http.get('v1/fotos').
            success(function(result){
                console.log(result);
                $scope.fotos = result;
            })
            .error(function(error){
                console.log(error);
        });

        $scope.remover = function(foto){
            console.log(foto);
            $http.delete('v1/fotos/' + foto._id)
            .success(function(result){
                var indiceFoto = $scope.fotos.indexOf(foto);
                $scope.fotos.splice(indiceFoto, 1);
                $scope.mensagem = 'Fotos removida com sucesso';
                
            })
            .error(function(err){
                console.log(err);
                $scope.mensagem = 'Erro ao apagar a foto';
            });
        };

});