#! /usr/bin/env roundup

describe "When creating web projects in an existing folder"

before() {
	rm -rf ../../test-project
	mkdir ../../test-project
	../fu webproject ../../test-project/
	cd ../../test-project
}

after() {
	cd -
	rm -rf ../../test-project
}

it_creates_the_folder_structure() {
	test -d client
	test -d views
	test -d public
}

it_copies_the_serverjs_file() {
	test -f server.js
}

it_adds_express_to_the_package_dependencies() {
	grep "express" package.json
}

it_adds_now_to_the_package_dependencies() {
	grep "now" package.json
}

it_adds_jade_to_the_package_dependencies() {
	grep "jade" package.json
}

it_copies_the_views() {
	test -f views/layout.jade
	test -f views/index.jade
}

it_copies_the_client_index() {
	test -f client/index.js
}
