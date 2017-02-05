var meanApp = angular.module('meanApp', ['ngRoute', 'ui.bootstrap']);

meanApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {
		templateUrl: '/templates/allpictures.html',
  		controller: 'picturesController'
    }).otherwise({
    	redirectTo: '/',
    	caseInsensitiveMatch: true
    })
}]);

meanApp.controller('picturesController', ['$scope', function($scope, $http) {
	$scope.showModal = false;
	$scope.description = '';

	$scope.uploadPicture = function(image) {
		debugger;
        var formData = new FormData();
        formData.append('image', image, image.name);
        $http.post('upload', formData, {
            headers: { 'Content-Type': false },
            transformRequest: angular.identity
        }).success(function(result) {
            $scope.uploadedImgSrc = result.src;
            $scope.sizeInBytes = result.size;
        });
    };
}]);