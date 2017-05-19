/**
 * Created by Marcia
 */

angular.module("sistAcademico").controller("cursoController",function ($scope, cursoAPIService,$location) {


    $scope.listaDeCursos=[];
    $scope.pagina =1;


    $scope.salvarCurso = function (curso) {
        cursoAPIService.salvarCurso(curso).then(function (dados) {
            alert("Curso salvo com sucesso");
            $location.url("/listarCursos")
        },function (err) {
            alert("Deu erro");
        });
    }


    var listarCursos = function () {
        var sucesso = function (dados) {
            $scope.listaDeCursos = dados.data;
        };
        var erro = function (err) {
            alert("Erro"+err)
        };

        cursoAPIService.listarCursos().then(sucesso,erro);
     };



        $scope.PassarPag = function (pagina) {
            $scope.pagina = pagina+1;
            cursoAPIService.listarCursosPorPagina($scope.pagina).then(function (dados) {
               if(!dados.data.length == 0){
                   $scope.listaDeCursos = dados.data;
               }else{
                   $scope.pagina--;
               }
            },function (err) {
                alert("Deu erro"+err);
            });
        };

        $scope.VoltarPag = function (pagina) {
            $scope.pagina = pagina-1;
            if($scope.pagina == 0){
                $scope.pagina = 1;
            }
            cursoAPIService.listarCursosPorPagina($scope.pagina).then(function (dados) {
                if(!dados.data.length == 0){
                    $scope.listaDeCursos = dados.data;
                }
            },function (err) {
                alert("Deu erro"+err);
            });
        };


        listarCursos();
});