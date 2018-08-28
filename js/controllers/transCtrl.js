myApp.controller('transCtrl', 
         function transCtrl($scope, $http) {
  $http({method: 'GET', url: 'trans.json'}).
            then(function success(response) {
      $scope.Trans = response.data.Trans;
      
  });
  
});