angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
    
    

})

.controller('JSController', function($scope, $ionicActionSheet,$ionicBackdrop,$timeout,$ionicLoading) {
    $scope.openActionSheet = function() {
     // Action Sheet Initialization using Properties
       var sheetId = $ionicActionSheet.show({
         titleText: 'Manage Books',
         buttons: [
           { text: '<b>Add New Book </b>' }
         ],
         cancelText: 'Cancel',
         destructiveText: 'Delete Book',
         cancel: function() {
             // code when cancel button is clicked
         },
         buttonClicked: function(index) {
           //  code which is to be executed on button click
         },
         destructiveButtonClicked: function(index) {
           //  code which is to be executed on button click
         }
       });
    }
    
     $scope.showBackDrop = function() {
        $ionicBackdrop.retain();
       $timeout(function() {
         $ionicBackdrop.release();
       }, 1000);
     };
    
    $scope.isOpen = false;
    $scope.option = 1;
    $scope.isChecked = true;
    
    $scope.rows = [
        {
            title:"Row 1",
            description:" Row 1 Description"
        },
        {
            title:"Row 2",
            description:" Row 2 Description"
        },
        {
            title:"Row 3",
            description:" Row 3 Description"
        }
    ];
    
    $scope.shouldShowDelete = true;
    $scope.shouldShowReorder = true;
    $scope.listCanSwipe = true;
    
    
    $scope.showLoading = function() {
        $ionicLoading.show({
         template: 'Loading...'
       });
       $timeout(function() {
         $ionicLoading.hide();
       }, 1000);
     };

})



