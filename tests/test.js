var Workers = require("./../index");



const testFunction = (a, b) => {

    console.log(a, b)

};



(async () => {

    var runner  = Workers(); 

    runner.run(100);

    runner.create("test", "5s", testFunction, [ "test_arg", true ], true);  

})();