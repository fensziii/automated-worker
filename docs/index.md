## automated-worker docs

**workers**
+ **[workers.create(name, update_time, fn, fn_args, force)](#workerscreatename-update_time-fn-fn_args-force)**
+ **[workers.run()](#workersrun)**
+ **[workers.getDataByName(name)](#workersgetdatabynamename)**
+ **[workers.removeWorkerByName(name)](#workersremoveworkerbynamename)**


<br>
<br>
<br>


## workers.create(name, update_time, fn, fn_args, force)
> create a worker with this function

**input**
+ `string`  set the worker name
+ `string`  set time to update **(example: `"1s"` )** __[d = days, h = hours, m = minutes, s = secconds, ms = millisecconds]__
+ `fn`      set function to run for worker
+ `array`   set function args
+ `boolean` force first function call


<br>
<br>
<br>


## workers.run()
> run workers

**input**
+ `undefined`

**output**
+ `undefined`


<br>
<br>
<br>


## workers.getDataByName(name)
> get data from worker

**input**
+ `string`  worker name

**output**
+ `object`  data from worker


<br>
<br>
<br>


## workers.removeWorkerByName(name)
> remove worker

**input**
+ `string`  worker name