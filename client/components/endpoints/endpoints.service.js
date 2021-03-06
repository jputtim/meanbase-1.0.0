(function(){
	angular.module('meanbaseApp').factory('endpoints', ['$http', function($http) {

		function endpoints(endpoint) {
			this.endpoint = endpoint || '';

			// If the url is a full address then don't modify it
			if(endpoint.indexOf('http://') > -1 || endpoint.indexOf('https://') > -1) {
				this.url = endpoint;
			} else {
				// else prefix it with /api/ so it calls our server api
				this.url = '/api/' + this.endpoint;
			}
		}

		endpoints.prototype.create = function(data) {
			var self = this;
			return $http.post(this.url, data).error(function(error) {
				self.errorHandler(error);
			});
		};

		endpoints.prototype.find = function(identifier) {
			var self = this;
			return $http.get(this.url, {params: identifier}).error(function(error) {
				self.errorHandler(error);
			});
		};

		endpoints.prototype.update = function(identifier, replacement) {
			var self = this;
			return $http.put(this.url, {identifier: identifier, replacement: replacement}).error(function(error) {
				self.errorHandler(error);
			});
		};

		endpoints.prototype.delete = function(identifier) {
			var self = this;
			return $http.delete(this.url, {
			    params: identifier,
			    headers: {"Content-Type": "application/json;charset=utf-8"}
  			}).error(function(error) {
				self.errorHandler(error);
			});
		};

		endpoints.prototype.findOne = function(id) {
			var self = this;
			return $http.get(this.url + '/' + id).error(function(error) {
				self.errorHandler(error);
			});
		};

		endpoints.prototype.updateOne = function(id, replacement) {
			var self = this;
			return $http.put(this.url + '/' + id, replacement).error(function(error) {
				self.errorHandler(error);
			});
		};

		endpoints.prototype.deleteOne = function(id) {
			var self = this;
			return $http.delete(this.url + '/' + id).error(function(error) {
				self.errorHandler(error);
			});
		};

		endpoints.prototype.errorHandler = function(error) {
			console.log('api request error: ', error);
		};

		return endpoints;
	}]);
})();
