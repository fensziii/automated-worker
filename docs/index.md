## automated-worker docs

**workers**
+ **[workers.create(name, update_time, fn, fn_args, force)](#workerscreatename-update_time-fn-fn_args-force)**
+ **workers.getDataByName()**
+ **workers.getDataByName()**
+ **workers.removeWorkerByName()**


## workers.create(name, update_time, fn, fn_args, force)
> create a worker with this function

**input**
+ `name`        set the worker name
+ `update_time` set time to update (example: "1s" ) [d = days, h = hours, m = minutes, s = secconds, ms = millisecconds]
+ `fn`          set function to run for worker
+ `fn_args`     set function args
+ `force`       force first function call