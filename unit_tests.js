var testsContext;

import 'angular';
import 'angular-mocks';

testsContext = require.context('./src', true, /_test\.js$/);
testsContext.keys().forEach(testsContext);
