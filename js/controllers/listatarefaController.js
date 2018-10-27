(function(){
    'use strict';
    angular
    .module('tarefa')
    .controller('listatarefaController', listatarefaController);

    listatarefaController.$inject = ['listatarefaAPI', '$scope']

    function listatarefaController(listatarefaAPI, $scope){
        $scope.listar = function(){
            listatarefaAPI.listar().then(function(data){
                $scope.tarefas=data;
            });
        }
    }
})();