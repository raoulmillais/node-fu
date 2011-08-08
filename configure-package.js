#! /usr/bin/env node

var fs = require('fs'),
	Step = require('step'),
	args = process.argv,
	i, l, projectName,
	githubUsername, gitUser, gitEmail;

args.shift(); // node
args.shift(); // this script

if (args.length != 5) {
	throw new Error('Incorrect number of arguments, expected project name, github username' +
					', git username, git email and path to package.json');
}

projectName = args[0];
githubUsername = args[1];
gitUser = args[2];
gitEmail = args[3];

console.log('Project Name: %s', projectName);
console.log('Github Username: %s', githubUsername);
console.log('Git User: %s', gitUser);
console.log('Git Email: %s', gitEmail);
console.log('Package file path: %s', args[4]);

fs.readFile(args[4], function(err, data) {
	var parsed,
		packageFile = args[4],
		modifiedPackageContents;

	if(err) {
		throw new Error(err);
	}
	
	parsed = JSON.parse(data);
	parsed.name = projectName;
	parsed.homepage.push('http://github.com/' + githubUsername + '/' + projectName);
	parsed.repository.url = 'git://github.com/' + githubUsername + '/' + projectName + '.git';
	parsed.author = gitUser + ' <' + gitEmail + '>';

	modifiedPackageContents = JSON.stringify(parsed);
	Step(
		function openFile() {
			console.log(packageFile);
			fs.open(packageFile, 'w', this);
		},
		function writeFile(err, fd) {
			fs.writeSync(fd, modifiedPackageContents, 0);
			console.log('Customised package.json');
		}
	);
});
