// Given a GitHub repository name and owner
// download all the contributors' profile images
// and save them to a subdirectory, avatars

// var var1 = process.argv[2];
// var var2 = process.argv[3];

// console.log(var1, var2);

var request = require('request');
var fs = require('fs');


console.log('Welcome to the GitHub Avatar Downloader!\n');

var GITHUB_USER = 'arnoldthchan';
var GITHUB_TOKEN = 'b56d31ba5c5cb58f1f0a55a2f9d9cf22877f0603';

function complete(){
  console.log('COMPLETED!');
}
//Fetches contributors as a JSON list
//Involves a callback function
//to loop and print out avatar URLs, for each object
function getRepoContributors(repoOwner, repoName, callback) {
var options = {
        url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
        headers: {
            'User-Agent': 'GitHub Avatar Downloader - Student Project'
        }
    };

request.get(options)
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Code: ', response.statusCode, '\nResponse Content Type:', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./result.txt').on('finish', complete));
}


//https://github.com/nodejs/node
//https://github.com/jquery/jquery
getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors:', err);
  console.log('Result:', result);
});