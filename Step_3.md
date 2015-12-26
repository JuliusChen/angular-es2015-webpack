# Step 3 - Unit tests

In this step, we add some unit test and the configuration to be able to run them.

We will use the following packages to write our tests

  * [mocha](https://mochajs.org/) as test framework
  * [chai](http://chaijs.com/) as expectation library
  * [sinon](http://sinonjs.org/) as mock/spy library
  
[Karma](http://karma-runner.github.io/) and [PhantomJS](http://phantomjs.org/) will be used to run them.

## Npm dependencies

To install required packages :

```
npm install --save-dev chai karma-chai karma-mocha karma-mocha-reporter karma-phantomjs-launcher karma-sinon karma-sinon-chai karma-sourcemap-loader karma-webpack mocha phantomjs sinon sinon-chai
```

A quick description of the packages

  * ``karma-mocha`` is an adapter for Karma to run mocha test files.
	* ``karma-mocha-reporter`` is a Karma reporter with mocha style logging.
  * ``karma-chai``, ``karma-sinon``, ``karma-sinon-chai`` are plugins to enable Chai, Sinon and Sinon-Chai.
  * ``karma-sourcemap-loader`` will load sourcemap files for debugging purpose.

## Conventions

Our tests will be writed in files with ``_test.js`` suffix.

They will be written with ES6 syntax so they will be transpiled before running.

## Principle

We create a file ``unit_tests.js`` which imports all test files and we configure Karma to load this file. 

Karma is configured to use Webpack to transpile file in ES5 before executing them. The webpack configuration used by Karma can be found in 
[karma.conf.js](karma.conf.js).

## Quickstart

* Run ``npm install``
* Run ``npm test``
