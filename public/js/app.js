console.log("app.js linked");

const app = angular.module("PostApp", []);

app.controller("MainController", ["$http", function($http) {
  this.test = "test";
  this.posts = [];

  // Get All Posts
  $http({
    method: "get",
    url: "/posts"
  }).then(response => {
    console.log(response.data);
    this.posts = response.data;
  }, error => {
    console.log(error);
  }).catch(err => {
    console.log("Catch: ", err);
  });

}]); //End of MainController
