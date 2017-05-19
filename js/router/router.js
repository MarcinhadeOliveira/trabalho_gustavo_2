/**
 * Created by Marcia
 */
angular.module("sistAcademico").config(["$routeProvider", function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"view/home/home.html"
    });

    $routeProvider.when("/cadastroCurso",{
        templateUrl:"view/cadastro/cadastroCurso.html",
        controller:"cursoController"
    });

    $routeProvider.when("/cadastroDisciplina",{
        templateUrl:"view/cadastro/cadastroDisciplina.html",
        controller:"disciplinaController"
    });

    $routeProvider.when("/cadastroAluno",{
        templateUrl:"view/cadastro/cadastroAluno.html",
        controller: "alunoController"
    });

    $routeProvider.when("/listarCursos",{
        templateUrl:"view/listar/listarCursos.html",
        controller:"cursoController"
    });

    $routeProvider.when("/listarDisciplinas",{
        templateUrl:"view/listar/listarDisciplinas.html",
        controller:"disciplinaController"
    });

    $routeProvider.when("/listarAlunos",{
        templateUrl:"view/listar/listarAlunos.html",
        controller:"alunoController"
    });

    $routeProvider.when("/matriculaAlunoDisciplina",{
        templateUrl:"view/matricular/alunoDisciplina.html",
        controller: "matAlunoDisciplinaController"
    });

}]);