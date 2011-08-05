#! /usr/bin/env node
/*
TODO

set name
set homepage - git remote
set repo url
set keywords (array)
set author - git config --global github.user  && git config --global user.name

*/

var fs = require('fs'),
	args = process.argv,
	i, l;

args.shift(); // node
args.shift(); // this script

for (i = 0, l = args.length; i < l; i++) {
	console.log(args[i]);
}

if (args.length != 4) {
	throw new Error('Incorrect number of arguments, expected github username' +
					', git username, git email and path to package.json');
}

fs.readFile(args[3], function(err, data) {
	var parsed;

	if(err) {
		throw new Error(err);
	}
	
	parsed = JSON.parse(data);
	//parsed.name = 
});
