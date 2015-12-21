angular.module('repo-list', ['ngMaterial'])
	.controller('RepoListController', RepoListController)
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
			controller: 'RepoListController',
			controllerAs: 'list',
			bindToController: {
				selectedRepo: '='
			}
		}
	});
