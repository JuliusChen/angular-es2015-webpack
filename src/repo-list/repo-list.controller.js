export default class RepoListController {

	constructor(repoService) {
		repoService.githubRepositoriesOf('jgiovaresco')
			.then((repos) => {
				this.repos = repos;
			});
	}

	selectRepo(repo) {
		this.selectedRepo = repo;
	}
}
