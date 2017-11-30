/* 
/* Packt Publishing 
/* Getting Started with Ionic
/* AppName: BookStore 
/* Tag-Line: Books E-Commerce Sample App
/* Author: Rahat Khanna (@mappmechanic) */

angular.module('BookStore', ['ionic','BookStore.Controllers'])

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
    templateUrl: 'js/home/subviews/homeView.main.html'
  })

  .state('about', {
    url: '/about',
    parent:'homeView',
    templateUrl: 'js/home/subviews/homeView.about.html'
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
   })

   .state('homeView.detail', {
    url: '/details/:bookId',
    templateUrl: 'js/home/subviews/homeView.books.details.html',
    controller: function ($stateParams,$scope) {
      $scope.bookId = $stateParams.bookId;
    }
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
