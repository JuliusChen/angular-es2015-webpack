import angular from 'angular';

import repoListModule from './repo-list/repo-list.module.js';
import repoDetailsModule from './repo-details/repo-details.module.js';

export default angular.module('repoApp', [repoListModule, repoDetailsModule]);
