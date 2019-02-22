var app = angular.module('app', []);
    app.controller('myCtrl', function($scope, $http){
        $http.get('voiture.json').then(function(res){
                $scope.voiture = res.data;
        });
});
