# Step 1 - Webpack basic

In this step, I use CommonJS notation to modularize the code and prevent the use of global variable.

In [index.html](index.html), you can see there is just one script declared ``bundle.js``.
This script needs to be generated before using the application. 

The Webpack command to build this file is 

```
$ webpack src/repo.app.js src/bundle.js

Hash: 12f0c5c7f87f72fe1028
Version: webpack 1.12.9
Time: 862ms
    Asset     Size  Chunks             Chunk Names
bundle.js  2.12 MB       0  [emitted]  main
   [0] ./src/repo.app.js 208 bytes {0} [built]
   [3] ./src/repo-list/repo-list.module.js 699 bytes {0} [built]
  [10] ./src/repo-list/repo-list.controller.js 331 bytes {0} [built]
  [11] ./src/repo-details/repo-details.module.js 331 bytes {0} [built]
    + 8 hidden modules
```

As you can see, Webpack just need the file where the main Angular module is declared. Then it will follow the ``require`` to find the other files.

## Quickstart

* Run ``npm install``
* Run ``npm run build``
* Open the file ``index.html`` in a browser
