function RepoListController($http) {
	var vm        = this;
	vm.selectRepo = selectRepo;

	init();

	function init() {
		$http.get('https://api.github.com/users/jgiovaresco/repos')
			.then(function (response) {
				vm.repos = response.data;
			});
	}

	function selectRepo(repo) {
		vm.selectedRepo = repo;
	}
}
