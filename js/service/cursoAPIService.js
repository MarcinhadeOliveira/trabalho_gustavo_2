/**
 * Created by Marcia
 */
angular.module("sistAcademico").factory("cursoAPIService",function ($http) {

    var _listarCursos = function () {
        return $http({
            method: "GET",
            url:"http://siscadcpwiv.herokuapp.com/curso/list/1/5",
        });
    };

    var _listarCursosParaSelect = function () {
        return $http({
            method: "GET",
            url:"http://siscadcpwiv.herokuapp.com/curso/list/1/1000",
        });
    };

    var _listarCursosPorPagina = function (id) {
        return $http({
            method: "GET",
            url:"http://siscadcpwiv.herokuapp.com/curso/list/"+id+"/5",
        });
    };

    var _salvarCurso = function (dados) {
        return $http({
            method:"POST",
            url:"http://siscadcpwiv.herokuapp.com/curso/",
            data:dados
        });
    };

    return{
        listarCursos: _listarCursos,
        salvarCurso: _salvarCurso,
        listarCursosPorPagina: _listarCursosPorPagina,
        listarCursosParaSelect: _listarCursosParaSelect
    }
});