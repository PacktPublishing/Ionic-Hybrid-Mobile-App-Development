/* 
/* Packt Publishing 
/* Getting Started with Ionic
/* AppName: BookStore 
/* Tag-Line: Books E-Commerce Sample App
/* Author: Rahat Khanna (@mappmechanic) */

angular.module('BookStore', ['ionic','BookStore.Controllers'])

.config(['$stateProvider','$urlRouterProvider',
  function mainAppConfig($stateProvider,$urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home');

  var homeViewStateObject = {
    url: '/home',
    templateUrl: 'js/home/homeView.html',
    controller: 'HomeController'
  };

  $stateProvider
  .state('homeView', homeViewStateObject)

  .state('homeView.main', {
    url: '/main',
    templateUrl: 'js/home/subviews/homeView.main.html'
  })

  .state('about', {
    url: '/about',
    parent:'homeView',
    templateUrl: 'js/home/subviews/homeView.about.html'
  })

  .state('books', {
    url: '/books',
    parent: homeViewStateObject,
    templateUrl: 'js/home/subviews/homeView.books.html'
  });

}])

.run(['$ionicPlatform','$rootScope','$state',function mainAppRun($ionicPlatform,$rootScope,$state) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }

    $rootScope.activeState = $state.current;
  });
}])
