/**
 * Created by Marcia
 */
angular.module("sistAcademico").factory("matriculaAPIService",function ($http) {

    var _salvarMatriculas = function (dados) {
        return $http({
            method:"POST",
            url:"http://siscadcpwiv.herokuapp.com/matricula/",
            data:dados
        });
    };
    var _listarSemestres = function () {
        return $http({
            method: "GET",
            url:"http://siscadcpwiv.herokuapp.com/semestre/list",
        });
    };

    var _listaMatriculasPorSemestre = function (id) {
        return $http({
            method: "GET",
            url:"http://siscadcpwiv.herokuapp.com/matricula/semestre/"+id,
        });
    };

    var _listaMatSemestreDisciplina = function (idSem,idDisc) {
        return $http({
            method: "GET",
            url:"http://siscadcpwiv.herokuapp.com/matricula/semestre/disciplina/"+idSem+"/"+idDisc,
        });
    };


    return{
        listarSemestres:_listarSemestres,
        listaMatriculasPorSemestre:_listaMatriculasPorSemestre,
        listaMatSemestreDisciplina:_listaMatSemestreDisciplina,
        salvarMatriculas:_salvarMatriculas
    }
});