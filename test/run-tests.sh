#! /usr/bin/env roundup

describe "When creating projects in an existing folder"

before() {
	mkdir ../../test-project
	../fu project ../../test-project/
	cd ../../test-project
}

after() {
	cd -
	rm -rf ../../test-project
}

it_creates_a_git_repo_with_a_precommit_hook() {
	status=$(git status > /dev/null ; echo $?)
	test 0 -eq $status
	test -x .git/hooks/pre-commit
	test -r .gitignore
}

it_creates_the_project_structure() {
	test -d lib
	test -d bin
	test -d support
	test -d spec
}

it_copies_a_readyjs_config() {
	test -r readyjs.conf
}

it_copies_a_package_definition() {
	test -r package.json
}

it_copies_a_makefile() {
	test -r Makefile
}

it_copies_the_versioning_script() {
	test -x bump-version.sh
}

