var ctrlModule = angular.module('BookStore.Controllers',['ngCordova']);

ctrlModule.controller('MainController',function($scope,$cordovaCamera,$ionicPlatform){
	$scope.bookImage = 'img/books.jpg';

	 $scope.takePhoto = function () {
	    $ionicPlatform.ready(function () {
			    var pluginOptions = {   
			      sourceType: Camera.PictureSourceType.CAMERA,
			      encodingType: Camera.EncodingType.PNG,
				   destinationType: Camera.DestinationType.FILE_URI
			    };
		    $cordovaCamera.getPicture(pluginOptions).then(function(picURI) {
		      $scope.bookImage = picURI;
		    }, function(err) {
		      // error 
		    });
	    });
	}
});

ctrlModule.controller('ServicesController',['$http','$ionicLoading','$scope','UserAuth','BooksFactory',function($http,$ionicLoading,$scope,UserAuth,BooksFactory) {
    // Using a Dummy Online Server for fetching Sample Content
    var baseUrl = "http://jsonplaceholder.typicode.com/";
    $scope.posts = null;
    $scope.testGetCall = function() {
        showLoading();
        $http.get(baseUrl+'users')
        .then(function(response){
           // this is success callback
            hideLoading();
            alert("Got "+response.data.length+" no. of objects.");
        },function(errorResponse) {
           // this is error callback
            hideLoading();
        });
    }
    
    $scope.testPostCall = function() {
        showLoading();
        $http.post(baseUrl+'users',{username:'test user'})
        .then(function(response){
           // this is success callback
            hideLoading();
            alert("Got StatusCode: "+response.status+" & Response :"+JSON.stringify(response.data));
        },function(errorResponse) {
           // this is error callback
            hideLoading();
        });
    }
    
    
    $scope.testPutCall = function() {
        showLoading();
        var req = {
         method: 'PUT',
         url: baseUrl+'todos/1',
         headers: {
           'Content-Type': 'application/json'
         },
         data: { post: 'Value' },
         cache: true
        }

        $http(req).then(function(response){
            hideLoading();
            alert("Got StatusCode: "+response.status+" & Response :"+JSON.stringify(response.data));
        }, function(error){
            console.log(error);
            hideLoading();
        });
    }
    
    $scope.userObj = { name: "Dummy", username: "dummyuname",password:"test",email:"a@a.com"};
    
    $scope.testSignupCall = function() {
      UserAuth.signup($scope.userObj)
      .then(function(response){
            hideLoading();
            alert("Got StatusCode: "+response.status+" & Response :"+JSON.stringify(response.data));
        }, function(error){
            console.log(error);
            hideLoading();
        });
    };
    
    $scope.testLoginCall = function() {
      UserAuth.login($scope.userObj)
      .then(function(response){
            hideLoading();
            alert("Got StatusCode: "+response.status+" & Response :"+JSON.stringify(response.data));
        }, function(error){
            console.log(error);
            hideLoading();
        });
    };
    
    $scope.testLogoutCall = function() {
      UserAuth.logout()
      .then(function(response){
            hideLoading();
            alert("Got StatusCode: "+response.status+" & Response :"+JSON.stringify(response.data));
        }, function(error){
            console.log(error);
            hideLoading();
        });
    };
    
    
    $scope.testFactoryMethod = function(methodName) {
        var dataObj = {};
     BooksFactory[methodName](dataObj).then(function(response){
            hideLoading();
            alert("Got StatusCode: "+response.status+" & Response :"+JSON.stringify(response.data));
        }, function(error){
            console.log(error);
            hideLoading();
        });  
        
    }
    
    
    
    function showLoading() {
        $ionicLoading.show({
          template: 'Loading...'
        });
    }
    
    function hideLoading() {
        $ionicLoading.hide();   
    }
}]);
