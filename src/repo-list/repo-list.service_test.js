import angular from 'angular';
import 'angular-mocks';

import RepoListService from './repo-list.service.js';

describe('repoService', () => {

	var service;
	var $httpBackend, $http;

	beforeEach(angular.mock.inject((_$httpBackend_, _$http_) => {
		$httpBackend = _$httpBackend_;
		$http        = _$http_;

		service = new RepoListService($http);
	}));

	afterEach(() => {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});

	describe('githubRepositoriesOf', () => {

		it('should call github url to list repositories of an user', (done) => {

			$httpBackend.expectGET('https://api.github.com/users/jgiovaresco/repos')
				.respond(['repo1', 'repo2']);

			service.githubRepositoriesOf('jgiovaresco')
				.then((results) => {
					expect(results).to.deep.equals(['repo1', 'repo2']);
					done();
				});

			$httpBackend.flush();
		});

	});

});
