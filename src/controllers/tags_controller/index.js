todoApp.controller('tagsIndexCtrl', ['$scope','$location','$log', '$http', function ($scope, $location, $log, $http) {
    $http.get('http://localhost:3001/api/v1/tags.json?page=1')
        .success(function (result) {
            $scope.tags = result
        })
}]);