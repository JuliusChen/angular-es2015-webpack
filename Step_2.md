# Step 2 - ES 6

In this step, I refactor the ES5 code to use ES6 syntax.

ES6 comes with a modules management. Please read this page of [exploringjs](http://exploringjs.com/es6/ch_modules.html) for more information.

So I replace every ``var xxx = require(xxx)`` by ``import xxx from xxx`` and ``module.exports`` by ``export xxx``
 
Moreover, I extract directives definition in an external file ``xxx.directive.js`` and use a class notation to define the directives and controller.

Finally I create a service which retrieves repositories of an user from GitHub.

## Webpack configuration

If you try to build the application with the same Webpack configuration as used in the previous step, you will get this output

```
$ npm run build     

> angular-es2015-webpack@1.0.0 build /home/julien/DEV/tuto/angular-es2015-webpack
> webpack

Hash: 3cb250a16e09d4e1e55d
Version: webpack 1.12.9
Time: 27ms
   [0] ./repo.app.js 0 bytes [built] [failed]

ERROR in ./repo.app.js
Module parse failed: /home/julien/DEV/tuto/angular-es2015-webpack/src/repo.app.js Line 1: Unexpected token
You may need an appropriate loader to handle this file type.
| import angular from 'angular';
| 
| import repoListModule from './repo-list/repo-list.module.js';
```

As you can see, Webpack can't parse files with ES6 import notation.

To be able to build ``bundle.js`` file, we need to transpile ES6 code to ES5 code. We can do that thanks to [Babel](https://babeljs.io/) and Webpack loaders.

### Npm dependencies

We need to install the following packages :

```
npm install --save-dev babel-core babel-loader babel-preset-es2015
```

### Update Webpack configuration

First we need to configure arguments for Babel. Please read [Babel configuration](https://babeljs.io/docs/usage/options/) for more information.

```
	babel: {
		cacheDirectory: true,
		presets: ['es2015']
	},
```

Finally we need to tell Webpack to use Babel when it sees a Javascript file. This is done by declaring a loader.

```
	module: {
		loaders: [
			// Loader to transpile JS file with Babel
			{
				// Regex to find js file
				test: /\.js/,
				// Define the loader to be used for the found files
				loader: 'babel',
				// Exclude files from node_modules to optimize the build
				exlude: /node_modules/
			}
		]
	}
```


## Quickstart

* Run ``npm install``
* Run ``npm run build``
* Open the file ``index.html`` in a browser
