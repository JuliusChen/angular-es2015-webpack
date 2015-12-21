import angular from 'angular';
import material from 'angular-material';

import RepoService from './repo-list.service.js';
import RepoList from './repo-list.directive.js';

export default angular.module('repo-list', [material])
	.service(RepoService.serviceName(), RepoService)
	.directive(RepoList.selector(), () => new RepoList())
	.name;
