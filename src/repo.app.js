var angular = require('angular');
var repoList   = require('./repo-list/repo-list.module');
var repoDetail = require('./repo-details/repo-details.module');

angular.module('repoApp', [repoList, repoDetail]);
