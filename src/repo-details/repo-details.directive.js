export default class RepoDetails {

	static selector() {
		return 'repoDetails';
	}

	constructor() {
		this.template =
			'<h2 class="Repo-header">{{ repo.name }}</h2>' +
			'<p>{{ repo | json }}</p>';
		this.scope    = {
			repo: '='
		};
	}
}
