module.exports = angular.module('repo-details', ['ngMaterial'])
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
