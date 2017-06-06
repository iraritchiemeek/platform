var platformApp = angular.module('platformApp', ['ngRoute']);
var map;
function initMap () {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }


platformApp.controller('mainController', function($scope, $location, $sce) {
	$scope.index = 0;

	$scope.decrementIndex = function(array) {
	    if ($scope.index <= 0) {
	        $scope.index = array.length -1
	    } else {
	        $scope.index -= 1
	    }
	}

	$scope.incrementIndex = function(array) {
	    if ($scope.index >= array.length -1) {
	        $scope.index = 0
	    } else {
	        $scope.index += 1
	    }
	}

	$scope.initMap = function () {
	        map = new google.maps.Map(document.getElementById('map'), {
	          center: {lat: -34.397, lng: 150.644},
	          zoom: 8
	        });
	      }

})