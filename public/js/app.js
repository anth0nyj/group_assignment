const app = angular.module("PostApp", []);

app.controller("MainController", ["$http", function($http) {
  this.posts = [];

  // Get All Posts
  $http({
    method: "get",
    url: "/posts"
  }).then(response => {
    this.posts = response.data;
  }, error => {
    console.log(error);
  }).catch(err => {
    console.log("Catch: ", err);
  });

  this.createPost = () => {
    $http({
      method: "post",
      url: "/posts",
      data: this.postData
    }).then(response => {
      this.posts.push(response.data);
    }, error => {
      console.error(error);
    }).catch(err => {
      console.log("Catch: ", err);
    })
  }

}]); //End of MainController
