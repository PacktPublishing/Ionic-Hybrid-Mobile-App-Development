// Ionic Components Demo
// Author: Rahat Khanna
// The Code has different views to demo different CSS & JS Ionic Components

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.css', {
    url: '/css',
    views: {
      'menuContent': {
        templateUrl: 'templates/css.html'
      }
    }
  })

  .state('app.js', {
      url: '/js',
      views: {
        'menuContent': {
          templateUrl: 'templates/js.html',
          controller: 'JSController'
        }
      }
   })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/js');
});
