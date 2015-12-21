import controller from './repo-list.controller.js';

export default class RepoList {

	static selector() {
		return 'repoList';
	}

	constructor() {
		this.template         =
				'<md-list>' +
				'<md-list-item class="md-3-line" ng-repeat="repo in list.repos" ng-click="list.selectRepo(repo)">' +
				'		<div class="md-list-item-text">' +
				'			<h3>{{ repo.name }}</h3>' +
				'			<p>{{ repo.url }}</p>' +
				'		</div>' +
				'<md-divider ng-if="!$last"></md-divider>' +
				'</md-list-item>' +
				'</md-list>';
		this.controller       = controller;
		this.controllerAs     = 'list';
		this.scope            = {};
		this.bindToController = {
			selectedRepo: '='
		};
	}
}
