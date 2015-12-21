import angular from 'angular';
import material from 'angular-material';
import RepoDetails from './repo-details.directive.js';

export default angular.module('repo-details', [material])
	.directive(RepoDetails.selector(), () => new RepoDetails())
	.name;
