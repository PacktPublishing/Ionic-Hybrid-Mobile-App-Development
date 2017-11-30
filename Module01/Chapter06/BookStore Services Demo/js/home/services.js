var servicesModule = angular.module('BookStore.Services',['ngCordova']);

servicesModule.service('UserAuth',
    ['$http','$cookies',
     function($http,$cookies) {
      this.baseApiUrl = 'http://localhost:9000/api';
      // Sample URL to be replaced by your own API url
 
        this.signup = function(userObj) {
 		// Making a POST $http call to /signup API call
		return $http.post(this.baseApiUrl+'/signup',userObj)
	    }
	    
	    this.login = function(username,password) {
 		// Making a GET $http call to /login API call
		return $http.get(this.baseApiUrl+'/login?username='+username+'&password='+password)
            .then(function(response) {
                  if(response.data.loginSuccessful == 'true')
                  { $cookies.put('sessionToken',response.data.sessionToken); }
            });
	    }

	    this.logout = function() {
 		// Making a GET $http call to /logout API call
		return $http.post(this.baseApiUrl+'/logout?sessionToken='+$cookies.get('sessionToken'))
		  .then(function(response){
		  	$cookies.remove('sessionToken');
 		  });
	    }
         }
    ]);

servicesModule.factory('BooksFactory',
    ['$http',
     function($http) {
	var baseApiUrl = 'http://localhost:9000/api'; 
         // Sample URL to be replaced by your own API url
	var booksList = [];
	var favoriteBooks = [];
	    var getBooks = function(category,author,sortBy) {
 		var filters = {};
		if(category)
		  filters['category'] = category;
	 	if(author)
		  filters['author'] = author;
		if(category)
		  filters['sortBy'] = sortBy;

 		// Making a POST $http call to /signup API call
		return $http.post(baseApiUrl+'/books',filters)
	    }
	    
	    var getBookDetails = function(bookId) {

 		// Making a GET $http call to /books/:id API call

		return $http.get(baseApiUrl+'/books/'+bookId);
	    }

	    var addToFavorite = function(bookObj) {
		if(bookObj) {
		   favoriteBooks.push(bookObj);
		   return true;
		}
          }
	  return {  getBooks: getBooks,
                getBookDetails: getBookDetails,
                addToFavorite: addToFavorite
           }
     }]);