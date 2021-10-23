## automated-worker docs

**workers**
+ **[workers.create(name, update_time, fn, fn_args, force)](#workerscreatestring-string-fn-array-boolean)**
+ **[workers.run()](#workersrun)**
+ **[workers.getDataByName(name)](#workersgetdatabynamestring)**
+ **[workers.removeWorkerByName(name)](#workersremoveworkerbynamestring)**

**informations**
+ **[how do we set time](#how-do-we-set-time-)**


<br>
<br>
<br>


## workers.create(`string`, `string`, `fn`, `array`, `boolean`)
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


## workers.getDataByName(`string`)
> get data from worker

**input**
+ `string`  worker name

**output**
+ `object`  data from worker


<br>
<br>
<br>


## workers.removeWorkerByName(`string`)
> remove worker

**input**
+ `string`  worker name


<br>
<br>

# Informations

<br>
<br>


## how do we set time ?

+ 1d  = 1 day
+ 1h  = 1 hour
+ 1m  = 1 minute
+ 1s  = 1 seccond
+ 1ms = 1 milliseccond

**example**

```

workers.create("name", "30m", fn, ["fn_args"], true);


```

> in this example the worker will run every 30 minutes