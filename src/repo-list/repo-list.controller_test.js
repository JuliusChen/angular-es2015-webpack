import angular from 'angular';

import Controller from './repo-list.controller.js';

describe('Repo list controller', () => {

	var $q, $rootScope;
	var repoServiceStub;


	beforeEach(angular.mock.inject((_$q_, _$rootScope_) => {
		$q = _$q_;
		$rootScope = _$rootScope_;
	}));

	beforeEach(() => {
		repoServiceStub = sinon.stub({
			githubRepositoriesOf: function() {}
		});
	});


	it('should expose the repo list', () => {

		repoServiceStub.githubRepositoriesOf.returns($q.when(['repo1', 'repo2']));

		let controller = new Controller(repoServiceStub);
		$rootScope.$apply();

		expect(controller.repos).to.deep.equal(['repo1', 'repo2']);
		expect(repoServiceStub.githubRepositoriesOf).to.be.calledWith('jgiovaresco');
	});
});
