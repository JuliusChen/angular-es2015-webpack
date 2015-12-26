# Step 4 - Code coverage and linter

In this step, we will enable a linter to check our code and we will calculate the code coverage of our tests.

## Linter

To check our code, we will use [ESLint](http://eslint.org/).

We need to install some packages :

```
npm install --save-dev eslint eslint-loader eslint-plugin-angular eslint-plugin-mocha
```

As you can see, we will use 2 plugins (angular and mocha) to enable specific rules for Angular code and Mocha tests.

### ESLint configuration

To configure ESLint, we create a file [.eslintrc](.eslintrc).

#### Specifying environments and global variables

First we configure the environment. 

```
	"env": {
		"browser": true,
		"es6": true,
		"mocha": true,
		"node": true
	}
```

With this configuration, ESLint will know that the global variables for browser, NodeJS and Mocha are available.
Besides we activate all ECMAScript 6 features except for modules with ``"es6": true``. ES6 modules can be supported thanks to the following 

```
	"ecmaFeatures": {
		"modules": true
	}
```

Then to prevent ESLint from complaining about Sinon and Chai expectations, we configure the following globals 

```
	"globals": {
		"sinon": false,
		"expect": false
	}
```

#### Configuring plugins

Plugins need to be declared with

```
	"plugins": [
		"angular",
		"mocha"
	]
```

Then rules defined in theses plugins are available in our configuration file.

#### Configuring rules

With ESLint we can extend an existing configuration files. We will extend the recommended configuration with

```
	"extends": "eslint:recommended"
```

Then, rules can be configured in the ``rules`` object. 

In our file, we change the default behaviour for some rules and activate rules from angular and mocha plugins.

### Webpack configuration

To execute ESLint when building the application, we update the Webpack configuration. 

We choose to declare a ``preLoader`` which gives all JS files to ``eslint-loader`` before all others loaders.

```
	...
	module: {
		preLoaders: [
			// Loader to lint our code
			{
				// Regex to find js file
				test: /\.js$/,
				// Define the loader to be used for the found files
				loader: 'eslint',
				// Exclude files from node_modules to optimize the build
				exclude: /node_modules/
			}
		],
	...
```

This configuration needs to be duplicated in ``karma.conf.js`` to lint our code when we execute our tests.

## Code coverage

We will use [isparta](https://github.com/douglasduteil/isparta) to enable the code coverage of our tests.

We need to install some packages :

```
npm install --save-dev isparta isparta-loader karma-coverage
```

Next we need to modify Karma configuration

  * to configure 2 loaders 
    * a loader to transpile our tests files.
    * a loader to instrument and transpile our code with isparta.
  * to activate and configure the Karma coverage reporter 

```
	...
		webpack: {
			...
			// ISparta configuration
			isparta: {
				embedSource: true,
				noAutoWrap: true,
				// these babel options will be passed only to isparta and not to babel-loader
				babel: {
					presets: ['es2015']
				}
			},
			// Loaders configuration same as webpack.config.js
			module: {
			...
				loaders: [
					// Transpile only test files with Babel directly
					{test: /_test\.js$/,	loader: 'babel', exclude: /node_modules/},
					// Loads js files with isparta (files will be automatically transpiled)
					{test: /\.js$/, loader: 'isparta', exclude: /node_modules|_test\.js$/}
				]
			}
		},

		// test results reporter to use
		reporters: ['mocha', 'coverage'],

		coverageReporter: {
			reporters: [
				{type: 'lcov', dir: 'build/coverage/', subdir: '.'},
				{type: 'json', dir: 'build/coverage/', subdir: '.'},
				{type: 'text-summary'}
			]
		},
	...
```

If we launch ``npm test``, we can see the following result

```
$ npm test

> angular-es2015-webpack@1.0.0 test /home/julien/DEV/tuto/angular-es2015-webpack
> karma start --single-run

....

SUMMARY:
✔ 2 tests completed

=============================== Coverage summary ===============================
Statements   : 97.06% ( 66/68 ), 3 ignored
Branches     : 100% ( 20/20 ), 6 ignored
Functions    : 100% ( 17/17 ), 2 ignored
Lines        : 88.89% ( 16/18 )
================================================================================
```

The coverage seems wrong because we just have 2 tests. Indeed results are skewed because we aren't loaded all files. 

We need to modify ``unit_tests.js`` to load all our files.

```javascript
import 'angular';
import 'angular-mocks';

let testsContext = require.context('./src', true, /_test\.js$/);
testsContext.keys().forEach(testsContext);

let context = require.context('./src', true, /\.app\.js$|\.controller\.js$|\.directive\.js$|\.module\.js$|\.service\.js$/);
context.keys().forEach(context);
```

NOTE: the regex to load our files is not optimized. Unfortunately my knowledge about regex is limited, however we will optimized this regex in future steps. 

Now if we launch ``npm test``, we can see the following result

```
$ npm test

> angular-es2015-webpack@1.0.0 test /home/julien/DEV/tuto/angular-es2015-webpack
> karma start --single-run

....

Finished in 0.034 secs / 0.005 secs

SUMMARY:
✔ 2 tests completed

=============================== Coverage summary ===============================
Statements   : 95.09% ( 155/163 ), 13 ignored
Branches     : 100% ( 56/56 ), 17 ignored
Functions    : 89.19% ( 33/37 ), 3 ignored
Lines        : 75% ( 24/32 )
================================================================================
```
