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

(async ()=>{

    var Workers = require("automated-worker");

    var runner  = worker();

    runner.run(5000);

})();

```