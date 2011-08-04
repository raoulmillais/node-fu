#! /usr/bin/env node
/*
TODO

set name
set homepage - git remote
set repo url
set keywords (array)
set author - git config --global github.user  && git config --global user.name

*/

var args = process.argv,
	i, l;

for (i = 0, l = args.length; i < l; i++) {
	console.log(args[i]);
}


