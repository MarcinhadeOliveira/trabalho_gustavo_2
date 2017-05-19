/**
 * Created by Marcia
 */

angular.module("sistAcademico").controller("alunoController",function ($scope, alunoAPIService, cursoAPIService,$location) {

    $scope.listaDeCursos=[];
    $scope.listaDeAlunos={};
    $scope.listaDeCursosSelect={};
    $scope.pagina =1;


    $scope.salvarAluno = function (aluno) {
            alunoAPIService.salvarAluno(aluno).then(function (dados) {
                alert("Aluno salvo com sucesso");
                $location.url("/listarAlunos")
            },function (err) {
                alert("Deu erro");
        });
    }


    var listarAlunos = function () {
        var sucesso = function (dados) {
            $scope.listaDeAlunos = dados.data;
        };

        var erro = function (err) {
            alert("Erro"+err)
        };
        alunoAPIService.listarAlunos().then(sucesso,erro);
    };


    var listarCursos = function () {
        var sucesso = function (dados) {
            $scope.listaDeCursos = dados.data;
        };

        var erro = function (err) {
            alert("Erro"+err)
        };

        cursoAPIService.listarCursos().then(sucesso,erro);
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

        $scope.PassarPag = function (pagina) {
            $scope.pagina = pagina+1;
            alunoAPIService.listarAlunosPorPagina($scope.pagina).then(function (dados) {
                if(!dados.data.length == 0){
                    $scope.listaDeAlunos = dados.data;
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
            alunoAPIService.listarAlunosPorPagina($scope.pagina).then(function (dados) {
                if(!dados.data.length == 0){
                    $scope.listaDeAlunos = dados.data;
                }
            },function (err) {
                alert("Deu erro"+err);
            });
        };


        $scope.listarAlunosPorCurso = function (id) {
            if(id){
            var sucesso = function (dados) {
            $scope.listaDeAlunos = dados.data;
            };
            var erro = function (err) {
            alert("Erro por curso"+err)
        };
        alunoAPIService.listarAlunosPorCurso(id).then(sucesso,erro);
            }else{
                listarAlunos();
            }
    };

        $scope.listarAlunosPorCurso(0);
        listarCursos();
        listarAlunos();
        listaCursosSelect();
});
