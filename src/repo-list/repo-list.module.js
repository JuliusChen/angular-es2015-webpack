var angular = require('angular');
var material = require('angular-material');

var controller = require('./repo-list.controller');

module.exports = angular.module('repo-list', [material])
	.directive('repoList', function () {
		return {
			template: '<md-list>' +
			'<md-list-item class="md-3-line" ng-repeat="repo in list.repos" ng-click="list.selectRepo(repo)">' +
			'		<div class="md-list-item-text">' +
			'			<h3>{{ repo.name }}</h3>' +
			'			<p>{{ repo.url }}</p>' +
			'		</div>' +
			'<md-divider ng-if="!$last"></md-divider>' +
			'</md-list-item>' +
			'</md-list>',
			controller: controller,
			controllerAs: 'list',
			bindToController: {
				selectedRepo: '='
			}
		}
	})
	.name;
