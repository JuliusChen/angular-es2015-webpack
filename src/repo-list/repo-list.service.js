export default class RepoListService {

	static serviceName() {
		return 'repoService';
	}

	constructor($http) {
		this.$http = $http;
	}

	githubRepositoriesOf(user) {
		return this.$http
			.get(`https://api.github.com/users/${user}/repos`)
			.then(({data}) => {
				return data;
			});
	}
}
