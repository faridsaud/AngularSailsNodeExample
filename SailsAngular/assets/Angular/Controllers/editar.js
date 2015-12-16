applicacion.controller('editarcontroller',['$scope','$timeout',function($scope,$timeout){
  console.log('Entraste a editar');

  $scope.classHeader="bounce";
  $scope.editarBoton=function(){
    $scope.classHeader="bounce";
    console.log("entraste a editar");
    $timeout(function(){
      console.log("estamos el el time out");
      $scope.classHeader="";
      $scope.$apply();
    },1000);
  }
}]);
