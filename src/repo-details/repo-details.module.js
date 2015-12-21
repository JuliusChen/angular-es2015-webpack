var angular = require('angular');
var material = require('angular-material');

module.exports = angular.module('repo-details', [material])
	.directive('repoDetails', function () {
		return {
			template: '<h2 class="Repo-header">{{ repo.name }}</h2>' +
			'<p>{{ repo | json }}</p>',
			scope: {
				repo: '='
			}
		}
	})
	.name;
