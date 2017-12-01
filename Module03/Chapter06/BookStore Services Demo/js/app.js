/* 
/* Packt Publishing 
/* Getting Started with Ionic
/* AppName: BookStore 
/* Tag-Line: Books E-Commerce Sample App
/* Author: Rahat Khanna (@mappmechanic) */

angular.module('BookStore', ['ionic','ionic.service.core','ionic.service.analytics','BookStore.Controllers','BookStore.Services','ngCookies'])

.config(['$stateProvider','$urlRouterProvider',
  function mainAppConfig($stateProvider,$urlRouterProvider){
  
  $urlRouterProvider.otherwise('/home/main');

  var homeViewStateObject = {
    abstract:true,
    url: '/home',
    templateUrl: 'js/home/homeView.html'
  };

  $stateProvider
  .state('homeView', homeViewStateObject)

  .state('homeView.main', {
    url: '/main',
    views: {
      'mainContent': {
        templateUrl: 'js/home/subviews/homeView.main.html',
        controller: 'MainController'
      }
    }
  })

  .state('about', {
    url: '/about',
    parent:'homeView',
    templateUrl: 'js/home/subviews/homeView.about.html'
  })
  
  .state('homeView.services', {
    url: '/services',
    views: {
      'mainContent': {
        templateUrl: 'js/home/subviews/homeView.services.html',
        controller: 'ServicesController'
      }
    }
  })

  .state('homeView.books', {
    abstract: true,
    url: '/books',
    templateUrl: 'js/home/subviews/homeView.books.html'
  })

   .state('homeView.books.list',{
       url:'/list',
       views: {
         'filters': {
               templateUrl:'js/home/subviews/homeView.books.filters.html'
         },
         'list': {
               templateUrl:'js/home/subviews/homeView.books.list.html'
         }
      }
   });

}])

.run(['$ionicPlatform','$rootScope','$state', '$ionicAnalytics',function mainAppRun($ionicPlatform,$rootScope,$state, $ionicAnalytics) {
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

    // Add this inside your $ionicPlatform.ready function that is defined inside the run function:
    $ionicAnalytics.register();
  });
}])
