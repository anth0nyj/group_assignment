const app = angular.module("PostApp", []);

app.controller("MainController", ["$http", function($http) {
  this.posts = [];
  this.post = {};

  // Get All Posts
  $http({
    method: "get",
    url: "/posts"
  }).then(response => {
    this.posts = response.data;
  }, error => {
    console.error(error);
  }).catch(err => {
    console.error("Catch: ", err);
  });

  // Create New Post
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
      console.error("Catch: ", err);
    })
  }

  // Delete Post
  this.deletePost = (postToDelete) => {
    console.log("Deleting: ", postToDelete._id);
    $http({
      method: "delete",
      url: "/posts/" + postToDelete._id
    }).then(response => {
      const postIndex = this.posts.findIndex(post => post._id === postToDelete._id);
      this.posts.splice(postIndex, 1);
    }, error => {
      console.error(error);
    }).catch(err => {
      console.error("Catch: ", err);
    })
  }

}]); //End of MainController
