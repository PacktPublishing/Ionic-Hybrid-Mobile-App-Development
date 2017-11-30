/* 
/* Packt Publishing 
/* Getting Started with Ionic
/* AppName: BookStore 
/* Tag-Line: Books E-Commerce Sample App
/* Author: Rahat Khanna (@mappmechanic) */

angular.module('BookStore', ['ionic','BookStore.Controllers'])

.config(['$stateProvider','$urlRouterProvider',
  function mainAppConfig($stateProvider,$urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home')

  $stateProvider.state('homeView', {
    url: '/home',
    templateUrl: 'js/home/homeView.html',
    controller: 'HomeController'
  });

}])

.run(['$ionicPlatform',function mainAppRun($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
}])
