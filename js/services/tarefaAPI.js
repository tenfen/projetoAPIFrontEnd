(function(){
    'use strict';
    angular
    .module('tarefa')
    .factory('tarefaAPI',tarefaAPI);

    tarefaAPI.$inject=['$http']

    function tarefaAPI($http){
        var _cadastro = function(tarefa){
            return $http.post('http://localhost:3000/cadastro', tarefa);
        };
        return{
            cadastro:_cadastro
        }
    }
})()