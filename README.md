automated-worker
=================

> Automated Workers for running functions


## Install
```
npm install git+https://github.com/fensziii/automated-worker.git --save
```

## Docs
Go here for Documentaion : [DOCS](docs/index.md)

## Example
```js

var Workers = require("automated-worker");



const testFunction = (a, b) => {

    console.log(a, b)

};



(async () => {

    var runner  = Workers(); 

    runner.run(100);

    runner.create("test", "5s", testFunction, [ "test_arg", true ], true);  

})();

```