(function(){
    'use strict';
    angular
    .module('tarefa')
    .factory('listatarefaAPI',listatarefaAPI);

    listatarefaAPI.$inject=['$http']

    function listatarefaAPI($http){
        var _listar = function(){
            return $http.get('http://localhost:3000/tarefa');
        };
        return{
            listar:_listar
        }
    }
})();