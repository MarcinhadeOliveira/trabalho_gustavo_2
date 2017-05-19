/**
 * Created by Marcia
 */

angular.module("sistAcademico").factory("alunoAPIService",function ($http) {

    var _listarAlunos = function () {
            return $http({
                method: "GET",
                url:"http://siscadcpwiv.herokuapp.com/aluno/list/1/8",
            });
        };

    var _listarAlunosPorCurso = function (id) {
        return $http({
            method: "GET",
            url:"http://siscadcpwiv.herokuapp.com/aluno/curso/"+id,
        })
    };

    var _salvarAluno = function (dados) {
        return $http({
            method:"POST",
            url:"http://siscadcpwiv.herokuapp.com/aluno/",
            data:dados
        });
    };

    var _listarAlunosPorPagina = function (id) {
        return $http({
            method: "GET",
            url:"http://siscadcpwiv.herokuapp.com/aluno/list/"+id+"/8",
        });
    };
        return{
            listarAlunos: _listarAlunos,
            listarAlunosPorCurso: _listarAlunosPorCurso,
            salvarAluno: _salvarAluno,
            listarAlunosPorPagina: _listarAlunosPorPagina
        }

});
