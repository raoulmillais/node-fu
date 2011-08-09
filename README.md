Fu - An Opinionated Node.js Project Setup Script
================================================

Fu makes it quick and simple to setup a new node.js project.  It enforces a few
conventions to enable quick continuously tested and linted code:

* Initialises a new git repo
* ready.js for continuous linting and compiling
* jessie and jezebel for continuous behaviour testing
* Prefilled npm package definition with necessary dependencies
* Standard project structure (bin,lib,spec,support)
* Makefile
* gitignore
* ... and finally a precommit hook to test and lint your code

You can also use it on your existing projects and it will (cautiously) try to
apply the structure on top.

Caveat
------

This is still very early days, I welcome any help testing and reporting bugs,
but I can't be held responsible if this script casuses the apocolapyse!

Install
-------

Clone the repository into your path (e.g. ~/bin/ or /usr/local/bin)

Before you start
----------------

Make sure you have nodejs <= 0.5.0 installed and npm

Example usage
-------------

Sanity check your environment and install any missing dependencies (You must run
this before you start creating projects):

    fu env

Create a project called bar in the current working directory:

    fu project bar

Create a project in the current working directory:

    fu project .

All the above can be used on exsting projects, if any of the files already exist
fu should ignore then and leave then untouched.

Make sure you install your project when you have created one:

    npm install
