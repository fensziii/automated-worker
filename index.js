/*

    Author : FENSZiii
    License: MIT

*/


const tools = {

    timediff : (start, current) => {

        var diff    = current.getTime() - start.getTime();

        var d       = diff / (1000 * (60 * 60) * 24);
        var h       = diff / (1000 * (60 * 60));
        var m       = diff / (1000 * 60);
        var s       = diff / 1000;
        var ms      = diff;
    
        return {
            d: Math.floor(d),
            h: Math.floor(h),
            m: Math.floor(m),
            s: Math.floor(s),
            ms
        };

    },

    sleep : (ms) => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

}; 



const worker = function () {

    var doWork  = true;
    var workers = [];
    var w       = new Object();


    w.create = (name = "", update = "1d", fn, args = [], force = true) => {

        workers.push({
            name        : name,
            update_time : new Date(),
            update_next : update,
            force_fetch : force,
            command     : { fn : fn, args : args },
            size        : 0,
            data        : null
        });

    }


    w.getDataByName = (name) => {

        for (const key in workers) {

            if(workers[key].name === name){
                
                return workers[key].data;
            
            }

        }

    }


    w.removeWorkerByName = (name) => {

        for (const key in workers) {

            if(workers[key].name === name){

                workers.splice(key, 1);
                
                return true;
            
            }

        }

        return false;

    }


    w.run = async (slowDown = 2000) => {

        while (doWork) {

            for (const key in workers) {

                const worker        = workers[key];

                var current_time    = new Date();

                var time_difference = tools.timediff(worker.update_time, current_time);

                const update_array  = worker.update_next.split(/(d|h|m|s|ms)$/g).filter(Boolean);

                if(workers[key].force_fetch === true || time_difference[update_array[1]] === parseInt(update_array[0])){

                    var data = await workers[key].command.fn.call(this, workers[key].command.args);

                    workers[key].data = data;
                    workers[key].size = JSON.stringify(data).length;

                    console.log(new Date());

                    // Update worker time
                    workers[key].update_time = new Date();

                    // Set Force Fetch to false
                    if(workers[key].force_fetch === true){

                        workers[key].force_fetch = false;

                    }

                }

            }
            
            await tools.sleep(slowDown);

        }

    }

    return w;

};



module.exports = worker;