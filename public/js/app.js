console.log("app.js linked");

const app = angular.module("PostApp", []);

app.controller("MainController", ["$http", function($http) {
  this.test = "test";
}]);
