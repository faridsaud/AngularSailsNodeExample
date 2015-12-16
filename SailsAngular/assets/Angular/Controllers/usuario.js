applicacion.controller('usuariocontroller',['$scope','$http',function($scope,$http){

  console.log('Entraste a usuario');
  $http({
    method:'GET',
    url:'http://localhost:1337/Entrenador'
  }).then(function correctoLlamoEntrenadores(respuesta){
    console.log(respuesta);
    $scope.entrenadores=respuesta.data;
    console.log($scope.entrenadores);
  },
  function errorNoLLamoEntrenadores(error){
    console.log(error);
  });

  $scope.editarEntrenador=function (entrenador){
    console.log(entrenador);
    $http({
      method:'PUT',
      url:'http://localhost:1337/Entrenador/'+entrenador.id,
      data:{
        nombre:entrenador.nombre,
        apellido:entrenador.apellido
      }
    })
  },
  $scope.registrarEntrenador=function (entrenador){
    console.log(entrenador);
    $http({
      method:'POST',
      url:'http://localhost:1337/Entrenador',
      data:{
        nombre:entrenador.nombre,
        apellido:entrenador.apellido
      }
    }),
    $http({
      method:'GET',
      url:'http://localhost:1337/Entrenador'
    }).then(function correctoLlamoEntrenadores(respuesta){
      console.log(respuesta);
      $scope.entrenadores=respuesta.data;
      console.log($scope.entrenadores);
    },
    function errorNoLLamoEntrenadores(error){
      console.log(error);
    });

  },
  $scope.eliminarEntrenador=function (entrenador){
    console.log(entrenador);
    $http({
      method:'DELETE',
      url:'http://localhost:1337/Entrenador/'+entrenador.id
    }).then(function bien(){

      actualizar();

    }, function error(){

    })
  }
  function actualizar(){

    $http({
      method:'GET',
      url:'http://localhost:1337/Entrenador',
    }).then(function correctoLlamoEntrenadores(respuesta){
      console.log(respuesta);
      $scope.entrenadores=respuesta.data;
      console.log($scope.entrenadores);
    },
    function errorNoLLamoEntrenadores(error){
      console.log(error);
    });
  }
}]);
