var module = angular.module('BookStore.Controllers',[]);

HomeController.$inject = ['$scope','$state'];

module.controller('HomeController',HomeController);

function HomeController($scope,$state) {
	$state.transitionTo('homeView.main');
}

