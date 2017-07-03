// Given a GitHub repository name and owner
// download all the contributors' profile images
// and save them to a subdirectory, avatars

var request = require('request');
var fs = require('fs');

var owner = process.argv[2];
var repo = process.argv[3];
var folders = './avatars';

var GITHUB_USER = 'arnoldthchan';
var GITHUB_TOKEN = 'b56d31ba5c5cb58f1f0a55a2f9d9cf22877f0603';
// var API_KEY = process.env.github_API_KEY;

function downloadImageByURL(url, filePath) {
  request.get(url)
         .on('error', function (err) {
           throw err;
         })
         // .on('response', function (response) {
         //   console.log('downloadImageByURL-Response Status Code: ', response.statusCode, '\nResponse Content Type:', response.headers['content-type']);
         // })
         .pipe(fs.createWriteStream(filePath + '.jpg'));
}

function iterateContributors(text){
  for (i in text){
    downloadImageByURL(text[i].avatar_url, `avatars/${text[i].login}`);
    }
}
//Requests using URL with user-agent and github user + token
function getRepoContributors(repoOwner, repoName, cb) {
var options = {
        url: 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
        headers: {
            'User-Agent': 'GitHub Avatar Downloader - Student Project'
        }
    };
//Then sends JSON pased body into callback function
request(options, function(err, res, body){
  if (err) throw err;
  // console.log('request-Response Status Code:', res.statusCode);
  var text = JSON.parse(body);
    cb(text);
  });
}


//START
getRepoContributors(owner, repo, iterateContributors);

console.log('\nWelcome to the GitHub Avatar Downloader!\n');
console.log(`Attempting download of ${repo} owned by ${owner}`);

//Checks if folder with foldername exist
//If not, creates one
function createFolder(folders){
  if (!fs.existsSync(folders)){
    fs.mkdirSync(folders);
  }
}