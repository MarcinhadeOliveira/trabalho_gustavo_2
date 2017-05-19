/**
 * Created by Marcia
 */

angular.module("sistAcademico").controller("disciplinaController",function ($scope,disciplinaAPIService,cursoAPIService,$location) {

    $scope.listaDeCursos=[];
    $scope.listaDeCursosSelect=[];
    $scope.listaDeDisciplinas=[];
    $scope.listaDeDisciplinas={};
    $scope.pagina =1;


        $scope.salvarDisciplina = function (disciplina) {
            disciplinaAPIService.salvarDisciplina(disciplina).then(function (dados) {
                alert("Disciplina salva com sucesso");
                $location.url("/listarDisciplinas")
            },function (err) {
                alert("Deu erro");
            });
        }


        var listaCursos = function () {
            var sucesso = function (dados) {
                $scope.listaDeCursos = dados.data;
            };
            var erro = function (err) {
                alert("Erro"+err)
            };
            cursoAPIService.listarCursos().then(sucesso,erro)
        };


        var listaCursosSelect = function () {
            var sucesso = function (dados) {
                $scope.listaDeCursosSelect = dados.data;
            };

            var erro = function (err) {
                alert("Erro"+err)
            };
            cursoAPIService.listarCursosParaSelect().then(sucesso,erro)
        };


        var listaDisciplinas = function () {
            var sucesso = function (dados) {
               $scope.listaDeDisciplinas = dados.data;
            };
            var erro = function (err) {
              alert("Erro"+err)
            };
            disciplinaAPIService.listarDisciplinas().then(sucesso,erro);
        };



        $scope.listarDisciplinasPorCurso = function (id) {
            if(id){
                var sucesso = function (dados) {
                    $scope.listaDeDisciplinas = dados.data;
                };
                var erro = function (err) {
                    alert("Erro "+err)
                };
                disciplinaAPIService.listarDisciplinasPorCurso(id).then(sucesso,erro);
            }else{
                listaDisciplinas();
            }
        };


        $scope.PassarPag = function (pagina) {
            $scope.pagina = pagina+1;
            disciplinaAPIService.listarDisciplinasPorPagina($scope.pagina).then(function (dados) {
                if(!dados.data.length == 0){
                    $scope.listaDeDisciplinas = dados.data;
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
            disciplinaAPIService.listarDisciplinasPorPagina($scope.pagina).then(function (dados) {
                if(!dados.data.length == 0){
                    $scope.listaDeDisciplinas = dados.data;
                }
            },function (err) {
                alert("Deu erro"+err);
            });
        };


        $scope.listarDisciplinasPorCurso(0);
        listaCursos();
        listaDisciplinas();
        listaCursosSelect();
});