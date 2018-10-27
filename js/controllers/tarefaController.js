(function(){

    'use strict';
    angular
    .module('tarefa')
    .controller('tarefaController', tarefaController);

    tarefaController.$inject = ['tarefaAPI', '$scope']

    function tarefaController(tarefaAPI, $scope){
        $scope.cadastro = function(tarefa){
            tarefaAPI.cadastro(tarefa).then(function(data){
                localStorage.setItem('token',data);
                if(data){
                   $scope.msg='gravou com sucesso';
                }
                else{
                   $scope.msg='erro na gravação.';
                }
            });
        }

        $scope.clear = function(){
           $scope.tarefa="";
        }
    }
})()