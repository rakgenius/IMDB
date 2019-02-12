var app = angular.module('search', [])
app.controller('searchController', function($scope, $http) {
    $scope.getData = function(){
        var url = "/imdb/movie/" + $scope.searchTerm;
        $scope.errorMessage = "some error";
        $http.get(url).then(function(resp){
            console.log(resp);
            $scope.search = resp.data;
        }).catch(function(resp){
            console.log(resp);
            $scope.errorMessage = resp.data;
        })
    }
});