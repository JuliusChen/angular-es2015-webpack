import angular from 'angular';
import material from 'angular-material';

import RepoList from './repo-list.directive.js';

export default angular.module('repo-list', [material])
	.directive(RepoList.selector(), () => new RepoList())
	.name;
