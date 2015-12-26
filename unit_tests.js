import 'angular';
import 'angular-mocks';

let testsContext = require.context('./src', true, /_test\.js$/);
testsContext.keys().forEach(testsContext);

let context = require.context('./src', true, /\.app\.js$|\.controller\.js$|\.directive\.js$|\.module\.js$|\.service\.js$/);
context.keys().forEach(context);
