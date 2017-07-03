// Given a GitHub repository name and owner
// download all the contributors' profile images
// and save them to a subdirectory, avatars

// var var1 = process.argv[2];
// var var2 = process.argv[3];

// console.log(var1, var2);

var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

//Fetches contributors as a JSON list
//Involves a callback function
//to loop and print out avatar URLs, for each object
function getRepoContributors(repoOwner, repoName, callback) {
  // ...
}


//https://github.com/nodejs/node
//https://github.com/jquery/jquery
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});